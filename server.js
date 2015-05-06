// Require express module
var 
    express = require('express');

// Create an express application
var app = express();

// get all required files
app.use(express.static('/')) 
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/style', express.static(__dirname + '/style'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/images', express.static(__dirname + '/images'));

// Render an HTML page 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

 // Show just how cool you are
app.listen(1337);
console.log("I'm working like a faithful server");