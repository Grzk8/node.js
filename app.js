const http = require('http');
//import modułu http




/*
function rqListener(req, res) {

};
//funkcja otrzymuje dwa argumenty odbierający żadanie i odpowiedz

http.createServer(rqListener);
//funkcja rqListener bedzie działać dla każdego prsychodzącego żądania

//uzywamy funkcji strzałkowej

*/
const server = http.createServer((req, res)=> {
    console.log(req.url, req. method, req.headers);
    // process.exit(); <- po otrzzymaniu żadania proces się zatrzymuje, kończy pętlę zdarzeń,
});

server.listen(3000);

//localhost3000