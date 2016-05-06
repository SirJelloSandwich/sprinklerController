(function(){

  var oldTime = Date.now();

  function App(){

    var Gpio = require('onoff').Gpio;
    var pin = new Gpio(14, 'out');
    var onOff = 0;

   this.test = function(){
      var date  = new Date();
      var day = date.getDay();
      var now = Date.now();
      var hours = date.getHours();
      var minutes = date.getMinutes();
	console.log("testing");
      if(now > (oldTime + 60000))
      {
	console.log("now is greater");
	console.log("minutes"+ minutes);

        if( minutes <= 25 && !onOff)
        {
           pin.writeSync(1);
           onOff = 1;
           console.log("on");
         }

         if( minutes >= 26 && onOff)
         {
           pin.writeSync(0);
           onOff = 0;
           oldTime = Date.now();
           console.log("off");
         }
      }

    }.bind(this);

    this.check =  function() {

      var now = Date.now();
      var hours = date.getHours();
      var minutes = date.getMinutes();

      if(now > (oldTime + 86400000))//wait 24hrs from startup, then from there wai till 6am
      {
        if(hours === 6 && minutes <= 45 && !onOff)
        {
           pin.writeSync(1);
           onOff = 1;
         }

         if(hours === 6 && minutes >= 46 && onOff)
         {
           pin.writeSync(0);
           onOff = 0;
           oldTime = Date.now();
         }
      }

    }.bind(this);

  }

  var app = new App();
 // app.check();
 // console.log("Start Up Check");

  setInterval(function(){
    app.test();
   // console.log("1 Minute Check Time Now"+" "+ Date.now() );
   // console.log("OldTime"+" "+ oldTime );
  }.bind(this), 60000);

}()); 



