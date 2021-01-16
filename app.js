const http = require('http');
const fs = require('fs'); // moduł systemu plików

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
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end(); 
    }
    if (url === '/message' && method === 'POST') {
        const body= [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        // on pozwala słuchać pewnych wydarzeń tutaj data, drugi argument do odpowiedz - chunk kawałek danych z którym pracujemy
        });
        req.on('end', () => {
            const parasedBody = Buffer.concat(body).toString();
            const message = parasedBody.split('=')[1];
            fs.writeFile('message.txt', message,err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            //funkcja (err) zostanie wykonana po zakończeniu (zapisaniu pliku)- obsługa błędów, kod działa asynchronicznie, node zapisuje plik i w tum samym czasie
            //wykonuje nast. linijki kodu. Funkcja err zosyanie wykonana po zapisaniu pliku.
            });
        });
    };
    //console.log(req.url, req. method, req.headers);
    // process.exit(); <- po otrzzymaniu żadania proces się zatrzymuje, kończy pętlę zdarzeń,

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Helo from node js server</h1></body>');
    res.write('</html');
    res.end();
});

server.listen(3000);

//localhost3000