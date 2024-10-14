const http = require('http');

function index (request,response) {
    response.writeHead(200);
    response.end('hello, world!')
}
http.createServer(function(request,response){
    if(request.url === '/'){
        return index(request,response);
    }
    response.writeHead(404)
    response.end(http.STATUS_CODES[404])
}).listen(1300)