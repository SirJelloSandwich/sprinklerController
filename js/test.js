var Gpio = require('onoff').Gpio;
var pin = new Gpio(14, 'out');
pin.writeSync(0);
