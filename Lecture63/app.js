var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

        res.writeHeader(200, {'Content-Type': 'application/json'});

        var obj = {
                firtsname: 'Bob',
                lastname: 'Dilan'
        };

        res.end(JSON.stringify(obj));

}).listen(8888,'127.0.0.1');
