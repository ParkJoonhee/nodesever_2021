function start(res) {
    let body = '<head><meta charset = "UTF-8"/></head>'
    body += '<body><div>Hello World! <br> I am in the cloud class.</div>';
    body += '<div><a href="\hello">hello 페이지</a></div>'
    body += '</body>'
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function hello(res) {
    let body = 'This is My first web Server.';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function wait(res) {
    setTimeout(function() {
        let body = 'Thank you for waiting for 5 seconds.';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(body);
        res.end();
    }, 5000);
}

exports.start = start;
exports.hello = hello;
exports.wait = wait;
