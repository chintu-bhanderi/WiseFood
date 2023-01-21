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

async function setTableBooks(req, res) {
    const {slotId,tableId,date,user} = req.body;
    // Static 
    // const user = "63a4ffc68cc75652b8850f92";
    
    if(!slotId || !tableId) {
        res.status(404).json({message: 'Please enter all fields'});
        return;
    }
    
    const table = await Table.findById(tableId);
    const price = table.price;
    // console.log(table);

    // await TableBook.remove();

    const tableBook = await TableBook.create({
        slot : slotId,
        table : tableId,
        price,
        user,
        date: Date.now()
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

module.exports = { getAllTableBooks,getTableBookById,getTableBooksByUserId, setTableBooks,updateAvailable,deleteTableBook }