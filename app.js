const express = require('express');

const app = express();

/*
app.use((req, res, next) => {
console.log('im middleware');
next();
});*/
//use - funkcja express, każde żądanie przechodzi przez tą funkcję, req i resp tak samo jak w vanilla node.js - z dodatkowymy funkcjami,
// next - funkcja która zostanie przekazana do tej funkcji przez express aby umożliwić przejście do oprogramowania middleware,
// pozwala na kontynuowanie następnego middleware 

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('im next middleware');
    res.send('<h1>Add product PAGE</h1>')
});

app.use('/', (req, res, next) => {
    console.log('im next middleware');
    res.send('<h1>Hello from express</h1>')
});

app.listen(3000);
