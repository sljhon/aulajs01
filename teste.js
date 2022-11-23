var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<b>aula de node.js </b> <br>');
    res.write('<i>aluno jhonatan</i> <br>');
    res.end('bom dia!');


}).listen(80);