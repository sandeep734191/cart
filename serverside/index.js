var express = require('express')
var mongoose = require('mongoose')
var userModel = require('./model/user')
var testerModel=require('./model/tester');
var app = express()

var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var jwt = require('jsonwebtoken')

var db=mongoose.connect("mongodb://localhost:27017/newdb",function(err,database){
    if(err){
    console.log("not connected")
    }else{
        console.log("connected to db")
    }
    })
    

app.get('/', function (req, res) {
    res.send('hello reddy')
})
app.post('/old', function (req, res) {
    console.log('reached login function' + req.body.user + req.body.pwd);
    const user = { user: req.body.user }
    const token = jwt.sign(user, 'my_secret_key')
    //res.send('successful login');
    res.json({
        token
    })
     var um =new testerModel()
    um.username=req.body.name;

    um.password=req.body.password;
    um.save((err)=>{
        if(err){
            //res.send(err)
            console.log('errror while inserting')
        }else{
            console.log('data ayya')
            //res.json(req.body)
            console.log(um)
            

        }
    })
    
})
app.post('/add', function (req, res) {
    console.log('reached registration function');
    res.send('registration successful');

    var um =new userModel()
    um.name=req.body.name;
    um.email=req.body.email;
    um.password=req.body.password;
    um.save((err)=>{
        if(err){
            res.send(err)
        }else{
            console.log('data ayya')
            res.json(req.body)
            console.log(um)
            

        }
    })
})

app.listen(4000);