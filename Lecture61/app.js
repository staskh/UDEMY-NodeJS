var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
        var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(html);

}).listen(8888,'127.0.0.1');
