const express = require('express');

const app = express();


/*
app.use((req, res, next) => {
    console.log('1');
next();
});

app.use((req, res, next) => {
    console.log('2');
    res.send('<p>Response</p>')
next();
});
*/

app.use('/users', (req, res, next) => {
res.send('<ul><li>user1</li><li>user2</li><li>user3</li></ul>')
});

app.use('/', (req, res, next) => {
res.send('<p>practice express</p>')
});

app.listen(3000);