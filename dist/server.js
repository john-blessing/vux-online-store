/**
 * Created by lesonli on 2016/11/15.
 */

const path = require('path');
const express = require('express');
const app = express();
var morgan = require('morgan');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'log-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
app.use(morgan('combined'));
app.use(morgan('combined', {
  stream: accessLogStream
}));
app.use(express.static('public'));

//开启单页路由跳转
app.use(function (req, res) {
  res.sendFile(path.dirname(require.main.filename) + '/public/home.html');
});

//测试路径
/*app.get('/', function (request, response) {
    response.send('Hello World!');
});*/
var PORT = parseInt(process.env.port || 3701);

app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT, '\n\n\n\n\n\n');
});
