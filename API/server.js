const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('./utils/database');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const users = require('./app/securityService/user/UserRoute.js');
const jobDetail = require('./app/employeeService/jobDetail/UserJobDetailRoute.js');


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
 res.json({"message" : "Welcome to you Barber Shop favourite website"});
});

app.use('/users', users);

app.use('/job_details', jobDetail);

app.listen(3000, function(){ console.log('Server is listening on port 3000');});