//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

//For parsing the html form data
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.ejs');
})














app.listen(1111, function(){
    console.log('Server Running on Port 1111');
})

