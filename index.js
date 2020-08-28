//importing package 
const express = require('express');
const mongoose =require('mongoose');

const url = 'mongodb://localhost/testdb2';

//connect mongodb to node app using connect method
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true });

//store connection into variable db
const db = mongoose.connection;

//veryfying connection
db.once('open',_=>{
    console.log('databse connected:', url);
});

db.on('error',(err)=>{
    console.error('connection failed:',err);
});


//create schema
const userSchema = new mongoose.Schema({

    name:String,

    age:Number
});


//create the model
const User = mongoose.model('model',userSchema,'User',);
//create object
const elywin = new User ({name:'elywin',age:30});

//save model
elywin.save(function(err,elywin){
    if(err) return console.error(err);
    console.log("Document inserted succussfully!");
});



const app = express();//initialising the express package
const port = 4001;
//routes


app.get('/',(req,res)=>{
    res.send("<h1>hello world</h1>");
});

app.get('/home',(req,res)=>{
    res.send("<h2>bye bye</h2>")
});

app.listen(port,()=>{
    console.log(`server is listening on http://localhost:${port}`);
});































// const http = require('http');

// const port = 4000;
// const status = 200;

// //creating server
// http.createServer((req,res)=>{
//     res.writeHead(status,{'content-type':'text/html'});
   
// //routes
//     const url = req.url;
//     if(url==='/home'){
//         res.write("<h2>hello</h2>");
//         res.end();
//     }else if(url==='/about'){
//         res.write("<h1>your on the about</h1>");
//         res.end();
//     }else{
//         res.write("<p>ki ekyiganye</p>");
//         res.end();
//     }

// }).listen(port,()=>{
    
// console.log(`server is listening on http://localhost:${port}`);

// });