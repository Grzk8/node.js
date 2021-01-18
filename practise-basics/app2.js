const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><h1>Hi from node.js server</h1></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Create User</button></form></body>');
        res.write('<html>');
        return res.end();
    };
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>Users:</head>');
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>');
        res.write('<html>');
        return res.end();
    };
    if (url === '/create-user' && method === 'POST') {
        const users = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            users.push(chunk);
        });
        req.on('end', () => {
            const parasedUsers = Buffer.concat(users).toString();
            const user = parasedUsers.split('=')[1];
            console.log(user);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    };
});

server.listen(3000);