var express = require('express');
var app = express();


app.use(express.static('build'));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
});

app.listen(5000, ()=>{
    console.log('App running....');
});