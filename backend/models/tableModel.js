const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
    price: {
        type: Number,
        required: [true,'Please add foodItem price']
    },
    chair: {
        type: Number,
        required: [true,'Please add table chair']
    },
},{
    timestemps: true,
})

const tableModel = mongoose.model('Table',tableSchema); 

module.exports = tableModel;