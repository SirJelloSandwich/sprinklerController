//var Gpio = require("../node_modules/onoff").Gpio;
//var pin = new Gpio(14, 'out');

function onFunction(){
	$.post('/on');
};
function offFunction(){
	$.post('/off');
};
