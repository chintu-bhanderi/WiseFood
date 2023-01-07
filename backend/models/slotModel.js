const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    slotNo: {
        type: Number,
        required: [true,'Please add slot id'],
        unique : true
    },
},{
    timestemps: true,
})

const slotModel = mongoose.model('Slot',slotSchema); 

module.exports = slotModel;