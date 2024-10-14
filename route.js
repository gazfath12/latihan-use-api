let routes = {
    '/':function index(request,response){
        response.writeHead(200);
        response.end('hello, world!')
    },
    '/foo':function foo(request,response){
       response.writeHead(200) 
       response.end('youre now viewing "foo"')
    }
}  

http.createServer(function(request,response){
    if(request.url in routes){
        return routes[request.url](request,response);
    }
    response.writeHead(404)
    response.end(http.STATUS_CODES[404])
}).listen(1300)