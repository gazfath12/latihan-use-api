const http = require('http');  
const url = require('url');  

// Data pengguna  
let users = [  
  { id: 1, name: 'Ali', email: 'ali@example.com' },  
  { id: 2, name: 'Fatimah', email: 'fatimah@example.com' }  
];  

// Membuat server HTTP  
const server = http.createServer((req, res) => {  
  const parsedUrl = url.parse(req.url, true);  
  const path = parsedUrl.pathname;  
  const method = req.method;  

  // Halaman utama dengan informasi API  
  if (method === 'GET' && path === '/') {  
    res.writeHead(200, { 'Content-Type': 'text/html' });  
    res.end(`  
      <!DOCTYPE html>  
      <html lang="en">  
      <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>User API Information</title>  
      </head>  
      <body>  
        <h1>Welcome to the User API</h1>  
        <p>Use the following endpoints to access the API:</p>  
        <ul>  
          <li><strong>GET /api/users</strong>: Returns the list of users in JSON format.</li>  
          <li><strong>GET /api/users/:id</strong>: Returns the details of a user by ID (e.g., <a href="/api/users/1">/api/users/1</a>).</li>  
        </ul>  
      </body>  
      </html>  
    `);  
  }   
  // API untuk mendapatkan semua pengguna  
  else if (method === 'GET' && path === '/api/users') {  
    res.writeHead(200, { 'Content-Type': 'application/json' });  
    res.end(JSON.stringify(users));  
  }   
  // API untuk mendapatkan pengguna berdasarkan ID  
  else if (method === 'GET' && path.startsWith('/api/users/')) {  
    const id = parseInt(path.split('/').pop(), 10);  
    const user = users.find(user => user.id === id);  

    if (user) {  
      res.writeHead(200, { 'Content-Type': 'application/json' });  
      res.end(JSON.stringify(user));  
    } else {  
      res.writeHead(404, { 'Content-Type': 'application/json' });  
      res.end(JSON.stringify({ error: 'User not found' }));  
    }  
  }   
  // Jika URL tidak ditemukan  
  else {  
    res.writeHead(404, { 'Content-Type': 'text/plain' });  
    res.end('404 Not Found');  
  }  
});  

// Menjalankan server di port 3000  
server.listen(3000, () => {  
  console.log('Server running at http://localhost:3000/');  
});