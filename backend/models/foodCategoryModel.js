const mongoose = require('mongoose')

const foodCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add foodItem name']
    },
    foodItem: [{
        type: mongoose.Types.ObjectId,
        ref: "FoodItem",
        required: true
    }],
}, {
    timestemps: true,
})

const foodCategoryModel = mongoose.model('FoodCategory', foodCategorySchema);

module.exports = foodCategoryModel;