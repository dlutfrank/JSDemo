var http = require('http');
var fs  = require('fs');
var url = require('url');

http.createServer(function (req,res) {
    let pathName = url.parse(req.url).pathname;
    console.log('Request for '+ pathName + ' Received');
    fs.readFile(pathName.substr(1),function(err,data){
        if (err) {
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/plain'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');
