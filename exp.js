var express = require('express');
var Gpio = require('onoff').Gpio;
var pin = new Gpio(14, 'out');

var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/on', function (req, res) {
  pin.writeSync(1);
});

app.post('/off', function(res,req){
	pin.writeSync(0);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

