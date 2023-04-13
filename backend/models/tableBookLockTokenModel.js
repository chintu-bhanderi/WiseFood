const mongoose = require('mongoose')

const tableBookLockTokenSchema = mongoose.Schema({
    token: {
        type : String,
        required: [true,'Please add Token'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60
    }
},{
    capped: { size: 1000000, max: 10000, autoIndexId: true },
    timestemps: true,
})

const tableBookLockTokenModel = mongoose.model('TableBookLockToken',tableBookLockTokenSchema); 

module.exports = tableBookLockTokenModel;