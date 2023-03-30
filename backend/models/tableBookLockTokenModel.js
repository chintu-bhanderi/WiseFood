const mongoose = require('mongoose')

const tableBookLockTokenSchema = mongoose.Schema({
    token: {
        type : String,
        required: [true,'Please add Token'],
    },
},{
    timestemps: true,
})

const tableBookLockTokenModel = mongoose.model('TableBookLockToken',tableBookLockTokenSchema); 

module.exports = tableBookLockTokenModel;