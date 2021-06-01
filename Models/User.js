const mongoose = require('mongoose')

//  Create User Model
var Schema = mongoose.Schema

var userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

module.exports = User = mongoose.model('user', userSchema)