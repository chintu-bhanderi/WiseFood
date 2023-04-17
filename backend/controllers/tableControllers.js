const Table = require('../models/tableModel');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 86400 , checkperiod: 8640 });

async function getAllTables(req, res) {
    const tables = await Table.find();

    res.status(200).json(tables);
}

async function getTableNo (req,res) {
    try{
        const tableId = req.params.id;

        const tableNoKey = `tableId-${tableId}`; 
        const cachedTableNo = cache.get(tableNoKey);
        if (cachedTableNo) {
            return res.status(200).send({ 
                tableNo: cachedTableNo,
                message: "tableNo get successfully" 
            });
        }

        const table = await Table.findById(tableId);
        cache.set(tableNoKey, table.tableNo);
        
        res.status(200).send({ 
			tableNo: table.tableNo,
			message: "tableNo get successfully" 
		});
    } catch(err){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })       
    }   
}

async function setTable(req, res) {
    const {price,chair,tableNo,category} = req.body;

    if(!tableNo || !price || !chair || !category) {
        res.status(404).json({message: 'Please enter all fields'});
        return;
    }

    const table = await Table.create({tableNo,price,chair,category});

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

module.exports = { 
    getAllTables,
    getTableNo, 
    setTable, 
    upadateTable, 
    deleteTable 
}