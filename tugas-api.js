const http = require('http');  



function index(request, response) {  
    response.writeHead(200, { "Content-Type": "application/json" }); // Perbaiki 'aplication/json' menjadi 'application/json'  
    response.end(JSON.stringify({ name: "gaza" }));  
}  

http.createServer(function(request, response) {  
    if (request.url === "/api/profile") {  
        return index(request,response)  
    }  
    response.writeHead(404);  
    response.end(http.STATUS_CODES[404]);  
}).listen(1300, () => {  
    console.log('Server running at http://localhost:1300/');  
});