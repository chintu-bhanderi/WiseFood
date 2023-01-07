const mongoose = require('mongoose')

const chefSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add Name']
    },
    load: {
        type: Number,
        default: 0,
    },
    foodOrder: [{
        type: mongoose.Types.ObjectId,
        ref: "FoodOrder",
    }],
},{
    timestemps: true,
})

const chefModel = mongoose.model('Chef',chefSchema); 

module.exports = chefModel;