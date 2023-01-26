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
    const userId = req.params.userId;

    const tableBooks = await TableBook.find({user:userId});
    
    res.status(200).json(tableBooks);
}

async function getTableBooksBySlotAndDate(req, res) {
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

    res.status(200).json(filterData);
}

async function setTableBooks(req, res) {
    const {slotId,tableId,user,date} = req.body;
    const {day,month,year} = date;
    // static
    // const {day,month,year} = {
    //     day: 24,
    //     month: 1,
    //     year: 2023
    // };
    
    if(!slotId || !tableId) {
        res.status(404).json({message: 'Please enter all fields'});
        return;
    }
    
    const table = await Table.findById(tableId);

    if(!table) {
        res.status(404).json({message: 'Please enter velid table'});
        return;
    }

    const price = table.price;
    
    const dateStr = `${month} ${day}, ${year}`;
    const bookDate = new Date(dateStr);
    // console.log(bookDate);

    const tableBook = await TableBook.create({
        slot : slotId,
        table : tableId,
        price,
        user,
        date: bookDate
    });

    res.status(200).json(tableBook);
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
    const tableBookId = req.params.bookId;
    try{
        await TableBook.deleteOne({_id:tableBookId});        
    } catch (err) {
        return console.log(err);
    }   
    return res.status(201).json({message:"successfully delete"});
}

module.exports = { getAllTableBooks,getTableBookById,getTableBooksByUserId,getTableBooksBySlotAndDate, setTableBooks,updateAvailable,deleteTableBook }