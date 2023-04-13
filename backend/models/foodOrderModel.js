const mongoose = require('mongoose')

const foodOrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add foodItem name']
    },
    quantity: {
        type: Number,
        required: [true,'Please add foodItem quantity']
    },
    totalPrice: {
        type: Number,
        required: [true,'Please add foodItem total price']
    },
    tableBook: {
        type: mongoose.Types.ObjectId,
        ref: "TableBook",
        required: [true,'Please add Table Book Id']
    },
    isDone: {
        type: Boolean,
        default: false
    },
    chef: {
        type: mongoose.Types.ObjectId,
        ref: "Worker",
        required: true
    },  
    isServed: {
        type: Boolean,
        default: false
    },
    waiter: {
        type: mongoose.Types.ObjectId,
        ref: "Worker"
    },  
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    tableNo: {
        type: Number
    },
    image:{
        type: String
    }
},{
    timestemps: true,
})

const foodOrderModel = mongoose.model('FoodOrder',foodOrderSchema); 

module.exports = foodOrderModel;