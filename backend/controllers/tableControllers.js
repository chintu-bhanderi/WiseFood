const Table = require('../models/tableModel');

async function getAllTables(req, res) {
    const tables = await Table.find();

    res.status(200).json(tables);
}

async function setTable(req, res) {
    const {price,chair} = req.body;

    if(!price || !chair) {
        res.status(404).json({message: 'Please enter all fields'});
        return;
    }

    const table = await Table.create({price,chair});

    res.status(200).json(table);
}
async function upadateTable(req, res) {
    const tableId = req.params.id;
    
    if(!tableId) {
        res.status(404).json({message: 'Please enter tableId'});
        return;
    }
    let table = await Table.findOne({_id:tableId});
    if(req.body.price) table.price = req.body.price; 
    if(req.body.chair) table.chair   = req.body.chair;
    await Table.findByIdAndUpdate(tableId,table);
    res.status(200).json({message:"table is updated"});
}
async function deleteTable(req, res) {
    const tableId = req.params.id;
    
    if(!tableId) {
        res.status(404).json({message: 'Please enter tableId'});
        return;
    }

    await Table.deleteOne({_id:tableId});
    res.status(200).json({message: 'Table is deleted succesfully'});
}



module.exports = { getAllTables, setTable, upadateTable, deleteTable }