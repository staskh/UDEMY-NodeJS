var http = require('http');

http.createServer(function(req,res){
        res.writeHeader(200, {'Content-Type': 'text/plain'});

        res.end('Hello world\n');

}).listen(8888,'127.0.0.1');
