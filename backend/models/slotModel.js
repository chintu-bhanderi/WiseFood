const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    slotNo: {
        type: Number,
        required: [true,'Please add slot no.'],
        unique : true
    },
    startTime: {
        type : String,
        required: [true,'Please add startTime'],
    },
    endTime: {
        type : String,
        required: [true,'Please add endTime'],
    },
},{
    timestemps: true,
})

const slotModel = mongoose.model('Slot',slotSchema); 

module.exports = slotModel;