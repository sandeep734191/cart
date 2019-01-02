var mongoose=require('mongoose')

var mongooseSchema=mongoose.Schema

var userSchema={
'username':String,
 
 'email':String,

  'password':String
}

module.exports = mongoose.model('registration_data',userSchema);