// var http = require('http');
// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world\n');
// }).listen(8081);
// console.log('server running at http://127.0.0.1:8081/');
var express = require('express')
var app = express();
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/home',function(req,res){
    res.send('hello world, home')
})
app.listen(8081,function(){
    console.log('now server listen on port http://127.0.0.1:8081')
})
