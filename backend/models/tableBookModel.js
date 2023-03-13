const mongoose = require('mongoose')

const tableBookSchema = mongoose.Schema({
    id:{
        type: Number,
        required: [true,'Please add TableBook id']
    },
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
    user: {
        type: mongoose.Types.ObjectId ,
        ref: "User",
        required: [true,'Please add User']
    },
    price: {
        type: Number,
        required: [true,'Please add Table price']
    },
    date: {
        type: String,
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