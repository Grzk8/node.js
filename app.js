const http = require('http'); //import modułu http

const routes = require('./routes')

//http.createServer(rqListener);

const server = http.createServer(routes);

server.listen(3000);

//localhost3000