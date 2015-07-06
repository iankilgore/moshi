function MoshiTime(dateObject)
{
	var tempMinutes = dateObject.getMinutes();

  this.setHour() = function() {
    									this.hour = dateObject.getHours();
  									}
  this.setOnes() = function()
 									  {
                      	this.ones = tempMinutes % 10;
                    }
  this.setTens() = function() {
    										this.tens = parseInt(tempMinutes/10);
                    }
  this.setAMPM() = function()
 				 						{
                      tempAMPM="am";
                      if (this.hour > 11)
                        {
                          if (this.hour != 12)
                            {
                              this.hour=this.hour-12;
                            }
                          tempAMPM="pm";
                        };
                      if (this.hour==0)
                        {
                          this.hour=12;
                        }
      								this.ampm = tempAMPM;
  									}

  this.setMoshiTime() = function()
 									 	{
    										setHour();
    										setTens();
    										setOnes();
    										setAMPM();
                      	setSayHour();
    										setSayTensMinute();
    										setSayOnesMinute();
    										setSayAMPM();
  									}

  this.setSayHour() = function() {
      var sayHour=document.createElement("AUDIO");
          switch (currentHour) {
          case 1 :
          sayHour.src="moshivoice/1.wav";
          break;
          case 2 :
          sayHour.src="moshivoice/2.wav";
          break;
          case 3 :
          sayHour.src="moshivoice/3.wav";
          break;
          case 4 :
          sayHour.src="moshivoice/4.wav";
          break;
          case 5 :
          sayHour.src="moshivoice/5.wav";
          break;
          case 6 :
          sayHour.src="moshivoice/6.wav";
          break;
          case 7 :
          sayHour.src="moshivoice/7.wav";
          break;
          case 8 :
          sayHour.src="moshivoice/8.wav";
          break;
          case 9 :
          sayHour.src="moshivoice/9.wav";
          break;
          case 10 :
          sayHour.src="moshivoice/10.wav";
          break;
          case 11 :
          sayHour.src="moshivoice/11.wav";
          break;
          case 12 :
          sayHour.src="moshivoice/12.wav";
          break;
          }
  }

  this.setSayOnesMinute() {
					var sayOnesMinute=document.createElement("AUDIO");
          switch (currentOnes) {
          case 0 :
          sayOnesMinute.src="moshivoice/oh.wav";
          break;
          case 1 :
          sayOnesMinute.src="moshivoice/1.wav";
          break;
          case 2 :
          sayOnesMinute.src="moshivoice/2.wav";
          break;
          case 3 :
          sayOnesMinute.src="moshivoice/3.wav";
          break;
          case 4 :
          sayOnesMinute.src="moshivoice/4.wav";
          break;
          case 5 :
          sayOnesMinute.src="moshivoice/5.wav";
          break;
          case 6 :
          sayOnesMinute.src="moshivoice/6.wav";
          break;
          case 7 :
          sayOnesMinute.src="moshivoice/7.wav";
          break;
          case 8 :
          sayOnesMinute.src="moshivoice/8.wav";
          break;
          case 9 :
          sayOnesMinute.src="moshivoice/9.wav";
          break;
          }
  }
  this.setSayTensMinute() = function() {
    	var sayTensMinute=document.createElement("AUDIO");
      switch (currentTens) {
      case 0 :
      sayTensMinute.src="moshivoice/oh.wav";
      break;
      case 1 :
      sayTensMinute.src="moshivoice/oh.wav";
      break;
      case 2 :
      sayTensMinute.src="moshivoice/20.wav";
      break;
      case 3 :
      sayTensMinute.src="moshivoice/30.wav";
      break;
      case 4 :
      sayTensMinute.src="moshivoice/40.wav";
      break;
      case 5 :
      sayTensMinute.src="moshivoice/50.wav";
      break;
      }
  }
  this.sayTime() = function()
  									{
                       sayTimeIs.play();
                       setTimeout(function(){sayHour.play()},1000);
                       setTimeout(function(){sayTensMinute.play()},1450);
                       setTimeout(function(){sayOnesMinute.play()},1945);
                       setTimeout(function(){sayAMPM.play()},2458);
                    }
}



function sayMoshiTime()
{

  var currentTime=new Date();
  var currentHour=currentTime.getHours();
  var currentMinute=currentTime.getMinutes();
  var currentTens=parseInt(currentMinute/10);
  var currentOnes=currentMinute % 10;

  var sayTimeIs=document.createElement("AUDIO");
  sayTimeIs.src="moshivoice/the_time_is.wav";

  var sayAMPM=document.createElement("AUDIO");

          if (currentHour > 11)
              {
              if (currentHour != 12)
              {
              currentHour=currentHour-12;
              }
              sayAMPM.src="moshivoice/pm.wav";;
              };
          if (currentHour==0){
              currentHour=12;
              }
  var sayHour=document.createElement("AUDIO");
  switch (currentHour) {
  case 1 :
  sayHour.src="moshivoice/1.wav";
  break;
  case 2 :
  sayHour.src="moshivoice/2.wav";
  break;
  case 3 :
  sayHour.src="moshivoice/3.wav";
  break;
  case 4 :
  sayHour.src="moshivoice/4.wav";
  break;
  case 5 :
  sayHour.src="moshivoice/5.wav";
  break;
  case 6 :
  sayHour.src="moshivoice/6.wav";
  break;
  case 7 :
  sayHour.src="moshivoice/7.wav";
  break;
  case 8 :
  sayHour.src="moshivoice/8.wav";
  break;
  case 9 :
  sayHour.src="moshivoice/9.wav";
  break;
  case 10 :
  sayHour.src="moshivoice/10.wav";
  break;
  case 11 :
  sayHour.src="moshivoice/11.wav";
  break;
  case 12 :
  sayHour.src="moshivoice/12.wav";
  break;
  }


  var sayTensMinute=document.createElement("AUDIO");
  switch (currentTens) {
  case 0 :
  sayTensMinute.src="moshivoice/oh.wav";
  break;
  case 1 :
  sayTensMinute.src="moshivoice/oh.wav";
  break;
  case 2 :
  sayTensMinute.src="moshivoice/20.wav";
  break;
  case 3 :
  sayTensMinute.src="moshivoice/30.wav";
  break;
  case 4 :
  sayTensMinute.src="moshivoice/40.wav";
  break;
  case 5 :
  sayTensMinute.src="moshivoice/50.wav";
  break;
  }

  var sayOnesMinute=document.createElement("AUDIO");
  switch (currentOnes) {
  case 0 :
  sayOnesMinute.src="moshivoice/oh.wav";
  break;
  case 1 :
  sayOnesMinute.src="moshivoice/1.wav";
  break;
  case 2 :
  sayOnesMinute.src="moshivoice/2.wav";
  break;
  case 3 :
  sayOnesMinute.src="moshivoice/3.wav";
  break;
  case 4 :
  sayOnesMinute.src="moshivoice/4.wav";
  break;
  case 5 :
  sayOnesMinute.src="moshivoice/5.wav";
  break;
  case 6 :
  sayOnesMinute.src="moshivoice/6.wav";
  break;
  case 7 :
  sayOnesMinute.src="moshivoice/7.wav";
  break;
  case 8 :
  sayOnesMinute.src="moshivoice/8.wav";
  break;
  case 9 :
  sayOnesMinute.src="moshivoice/9.wav";
  break;
  }


sayTimeIs.play();
 setTimeout(function(){sayHour.play()},1000);
 setTimeout(function(){sayTensMinute.play()},1450);
 setTimeout(function(){sayOnesMinute.play()},1945);
 setTimeout(function(){sayAMPM.play()},2458);


}
