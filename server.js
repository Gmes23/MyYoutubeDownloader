//dependecies
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./controllers/controller.js');
// var path = require('path');
// var http = require('http');
// var fs = require('fs');
var PORT = process.env.PORT || 3000;

// var fs = require('fs');
// var youtubedl = require('youtube-dl');
// var video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
//   // Optional arguments passed to youtube-dl.
//   ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//   { cwd: __dirname });
//
// // Will be called when the download starts.
// video.on('info', function(info) {
//   console.log('Download started');
//   console.log('filename: ' + info.filename);
//   console.log('size: ' + info.size);
// });

// video.pipe(fs.createWriteStream('myvideo.mp4'));

var ytdl = require('youtube-dl');

var url = 'https://www.youtube.com/watch?v=u_6MixFK_-g&t=1399s';

ytdl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function exec(err, output) {
  'use strict';
  if (err) { throw err; }
  console.log(output.join('\n'));
});
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
