const restful = require('node-restful')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nameUser: {type: String, required: true},
    account: {type: String},
    deviceName:  {type: String},
    project:  {type: String},
    location:  {type: String},
    hiringDate: { type: Date},
    createdAt: { type: Date, default: Date.now}
})

module.exports = restful.model('Invetory', userSchema)