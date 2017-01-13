//dependecies
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./controllers/controller.js');
var path = require('path');
var http = require('http');
var fs = require('fs');
var PORT = process.env.PORT || 3000;



// var file = fs.createWriteStream("file.jpg");
// var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//   response.pipe(file);
// });





app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT);


app.use('/', routes);

console.log("listening on port" + PORT);
