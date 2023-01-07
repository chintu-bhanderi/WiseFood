const mongoose = require('mongoose')

const tableBookSchema = mongoose.Schema({
    slot: {
        type: mongoose.Types.ObjectId ,
        ref: "Slot",
        required: [true,'Please add slot']
    },
    table: {
        type: mongoose.Types.ObjectId ,
        ref: "Table",
        required: [true,'Please add Table']
    },
    date: {
        type: Date,
        required: [true,'Please add Date']
    },
    isAvailable: {
        type: Boolean,
        default: false
    }
},{
    timestemps: true,
})

const tableBookModel = mongoose.model('TableBook',tableBookSchema); 

module.exports = tableBookModel;