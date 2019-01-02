var mongoose = require('mongoose')

var mongooseSchema = mongoose.Schema

var userSchema = new mongooseSchema({
    'username': String,



    'password': String
})

module.exports = mongoose.model('login_details', userSchema);