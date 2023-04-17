const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
    tableNo: {
        type: Number,
        required: [true,'Please add table no.'],
        unique : true
    },
    price: {
        type: Number,
        required: [true,'Please add foodItem price']
    },
    chair: {
        type: Number,
        required: [true,'Please add table chair']
    },
    category: {
        type: Number,
        required: [true,'Please add category']
    }
},{
    timestemps: true,
})

const tableModel = mongoose.model('Table',tableSchema); 

module.exports = tableModel;