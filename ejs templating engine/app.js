const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('main', {pageTitle: 'Add user'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users
    });
  });
  
  app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
  });
app.listen(3000); 