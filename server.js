// Dependencies requirements, Express 4
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose        = require("mongoose");
var app            = express();


app.use(morgan('dev'));
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));

//Add the routes
routes = require('./app/routes')(app);


//app.listen(8083);
app.listen(process.env.PORT || 5000);
console.log('escribir en el navegador : http://localhost:8083/');

 