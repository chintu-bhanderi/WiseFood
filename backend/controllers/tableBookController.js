const Slot = require('../models/slotModel');
const Table = require('../models/tableModel');
const TableBook = require('../models/tableBookModel');


async function getAllTableBooks(req, res) {
    const tableBooks = await TableBook.find({});

    res.status(200).json(tableBooks);
}

async function getTableBookById(req, res) {
    const bookId = req.params.bookId;

    const tableBook = await TableBook.findById(bookId); 

    res.status(200).json(tableBook);
}

async function getTableBooksByUserId(req, res) {
    try{
        const userId = req.params.userId;
        const tableBooks = await TableBook.find({user:userId});
        res.status(200).send({ 
            tableBooks: tableBooks,
            message: "TableBooks get successfully" 
        });
    } catch(err){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function getAvailableTableByUserId(req, res) {
    try{
        const userId = req.params.userId;
        const tableBook = await TableBook.findOne({user:userId,isAvailable:true});
        if(!tableBook) {
            return  res.status(404).json({
				error: {
					errorMessage: ["Not get any available table for this userId"]
                }
            })  
        }
        const table = await Table.findById(tableBook.table);
        res.status(200).send({ 
            table,
            message: "Table get successfully" 
        });
    } catch(err){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function getTablesBySlotAndDate(req, res) {
    try{
        const {slotId,date} = req.body;
        const {day,month,year} = date;
        // const {day,month,year} = {
            //     day: 24,
            //     month: 1,
            //     year: 2023
            // };
        const dateStr = `${month} ${day}, ${year}`;
        const bookDate = new Date(dateStr);
        
        const tables = await Table.find({});
        const tableBooks = await TableBook.find({});
        
        const filterData = tables.filter((table) => {
            const findTable = tableBooks.filter((tableBook)=>{
                if(tableBook.table.toString()==table._id && tableBook.slot==slotId && tableBook.date.toString()==bookDate.toString()) return true;
                else return false;
            }) 
            if(findTable.length>0) return false;
            else return true;
        })  
        
        res.status(200).send({ 
            tables: filterData,
            message: "Tables get successfully" 
        });
    } catch (error) {
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
    
}

async function getTableBookByTableSlotDate(req, res) {
    try{
        const {tableNo,slotNo,date} = req.body;
        const {day,month,year} = date;
        // const {day,month,year} = {
            //     day: 24,
            //     month: 1,
            //     year: 2023
            // };
        const dateStr = `${month} ${day}, ${year}`;
        const bookDate = new Date(dateStr);

        const table = await Table.findOne({tableNo});
        const slot = await Slot.findOne({slotNo});
        // console.log(slot);

        const tableBook = await TableBook.findOne({
            table:table._id,
            slot:slot._id,
            date: bookDate
        });
        // console.log(tableBook);

        res.status(200).send({ 
            tableBook,
            message: "TableBook get successfully" 
        });
    } catch (error) {
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }    
}

const getMEXIdFromAllTableBooks = (tableBooks) => {
    if(!tableBooks.length || tableBooks.length==0) return 1;
    tableBooks.sort((book1, book2) => {
        return book1.id - book2.id;
    });
    let id=1;
    for(let i=0; i<tableBooks.length; i++) {
        if(id!=tableBooks[i].id) return id;
        id++;
    }
    return id;
}

async function setTableBooks(req, res) {
    try{
        const {slotId,tableId,user,date} = req.body;
        const {day,month,year} = date;
        // static
        // const {day,month,year} = {
        //     day: 2,
        //     month: 2,
        //     year: 2023
        // };
        
        if(!slotId || !tableId) {
            return  res.status(404).json({
                error: {
                    errorMessage: ["Please enter all fields"]
                }
            })  
        }
        
        const table = await Table.findById(tableId);
        
        if(!table) {
            return  res.status(404).json({
                error: {
                    errorMessage: ["Please enter velid table"]
                }
            })  
        }
        
        const tableBooks = await TableBook.find({});
        const id = getMEXIdFromAllTableBooks(tableBooks);
        
        const price = table.price;
        
        const dateStr = `${month} ${day}, ${year}`;
        const bookDate = new Date(dateStr);
        
        const tableBook = await TableBook.create({
            id,
            slot : slotId,
            table : tableId,
            price,
            user,
            date: bookDate
        });
        res.status(200).send({ 
            message: "TableBook successfully"
		});
    } catch(err){
        console.log(err);
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }    
}

async function updateAvailable(req, res) {
    const bookId = req.params.bookId;

    if(!bookId) {
        res.status(404).json({message: 'Please enter all fields'});
        return;
    }

    const table = await TableBook.findById(bookId);

    table.isAvailable = true;

    await TableBook.findByIdAndUpdate(table._id,table);

    res.status(200).json({message: 'Available is Updated'});
}

async function deleteTableBook(req,res) {
    try{
        const tableBookId = req.params.bookId;
        await TableBook.deleteOne({_id:tableBookId});        
        res.status(200).send({ 
            message: "TableBook successfully delete"
		});
    } catch (err) {
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }   
}

module.exports = { getAllTableBooks,getTableBookById,getTableBooksByUserId,getAvailableTableByUserId,getTableBookByTableSlotDate,getTablesBySlotAndDate, setTableBooks,updateAvailable,deleteTableBook }