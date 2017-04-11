// var http = require('http');
// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world\n');
// }).listen(8081);
// console.log('server running at http://127.0.0.1:8081/');
var express = require('express')
var fs = require('fs');
var app = express();
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/home',function(req,res){
    res.send('hello world, home')
})
app.get('/file',function(req,res){
    let data = fs.readFileSync('input.data');
    console.log(data.toString());
    res.send(data.toString());
    console.log("Program Ended");
})
app.listen(8081,function(){
    console.log('now server listen on port http://127.0.0.1:8081')
})
let data = fs.readFile('input.data',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
console.log('Program started');
console.log(__filename);
