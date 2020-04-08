const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const app = express();

// connection to db
mongoose.connect('mongodb://username:password@address:port/database')
  .then(db => console.log('Connected to DB!'))
  .catch(err => console.log(err));

// importing routes
const UserRoutes = require('./routes/users');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/users', UserRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
