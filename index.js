const http = require('http');

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}
server = http.createServer(onRequest)
server.listen(8000, 'localhost');
console.log('Server running at http://localhost:8000');