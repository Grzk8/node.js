const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/*
app.use((req, res, next) => {
console.log('im middleware');
next();
});*/
//use - funkcja express, każde żądanie przechodzi przez tą funkcję, req i resp tak samo jak w vanilla node.js - z dodatkowymy funkcjami,
// next - funkcja która zostanie przekazana do tej funkcji przez express aby umożliwić przejście do oprogramowania middleware,
// pozwala na kontynuowanie następnego middleware 


app.use(bodyParser.urlencoded({extended: false}));
// 'parsowanie' - analizowanie przychodzacej treści żądania, oprogramowanie pośredniczące, przetwarza treśc żadania w body, nie przetwarz plików, json`ów itp

app.use('/', (req, res, next) => {

    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')
});

app.listen(3000);
