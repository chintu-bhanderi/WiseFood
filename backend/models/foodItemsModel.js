const mongoose = require('mongoose')

const foodItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add foodItem name']
    },
    price: {
        type: Number,
        required: [true,'Please add foodItem price']
    },
    isAvailable: {
        type: Boolean,
        default: 1
    },
    category: {
        type: String,
        ref: "FoodCategory",
        required: [true,'Please add category']
    },
    image:{
        type:String
    }
},{
    timestemps: true,
})

const foodItemsModel = mongoose.model('FoodItem',foodItemSchema); 

module.exports = foodItemsModel;