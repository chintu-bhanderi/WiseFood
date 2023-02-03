const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    slotNo: {
        type: Number,
        required: [true,'Please add slot no.'],
        unique : true
    },
    startTime: {
        type : Date,
        required: [true,'Please add startTime'],
    },
    endTime: {
        type : Date,
        required: [true,'Please add endTime'],
    },
},{
    timestemps: true,
})

const slotModel = mongoose.model('Slot',slotSchema); 

module.exports = slotModel;