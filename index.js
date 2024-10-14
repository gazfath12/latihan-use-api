const http = require('http')

http.createServer((request,response) =>{
response.writeHead(200,{
    'Content-Type':'text/plain'
})
response.write('hello, world!\n')

response.end();
}).listen(1000)


