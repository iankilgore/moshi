function MoshiTime(dateObject)
{
	var tempMinutes = dateObject.getMinutes();
	var sayTensMinute=document.createElement("AUDIO");
  var sayHour=document.createElement("AUDIO");
	var sayOnesMinute=document.createElement("AUDIO");
	var sayAMPM=document.createElement("AUDIO");
	var sayTimeIs=document.createElement("AUDIO");
  	sayTimeIs.src="moshivoice/the_time_is.wav";

  this.setHour= function() {
    									this.hour = dateObject.getHours();
  									}
  this.setOnes= function()
 									  {
                      	this.ones = tempMinutes % 10;
                    }
  this.setTens= function() {
    										this.tens = parseInt(tempMinutes/10);
                    }
  this.setAMPM= function()
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

  this.setMoshiTime= function()
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

  this.setSayHour= function() {

          switch (hour) {
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

  this.setSayOnesMinute= function() {

          switch (ones) {
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
  this.setSayTensMinute= function() {

      switch (tens) {
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
  this.sayTime= function()
  									{
                       sayTimeIs.play();
                       setTimeout(function(){sayHour.play()},1000);
                       setTimeout(function(){sayTensMinute.play()},1450);
                       setTimeout(function(){sayOnesMinute.play()},1945);
                       setTimeout(function(){sayAMPM.play()},2458);
                    }
}
