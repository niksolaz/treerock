const express = require("express");
const app = express();
const fakeDb = require("./fakeDb.json");

app.get('/', function(req, res){
    console.log('ciao');
    res.send('Hello world');
})

app.get('/test', function(req, res){
    console.log('ciao test');
    res.json(fakeDb);
})

app.listen(3000, function(){
    console.log('server listen http://localhost:3000')
})


