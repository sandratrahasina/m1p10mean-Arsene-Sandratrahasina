const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('./utils/database');
const jwt = require('jsonwebtoken');

const users = require('./app/securityService/UserRoute.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
 res.json({"message" : "Welcome to you Barber Shop favourite website"});
});

app.use('/users', users);

app.listen(3000, function(){ console.log('Server is listening on port 3000');});