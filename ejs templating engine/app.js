const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const usersData = require('./routes/users');
const formShow = require('./routes/form');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersData.routes);
app.use(formShow);

app.listen(3000);