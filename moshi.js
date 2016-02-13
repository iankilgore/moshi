function Moshi()
{
  var currentTime;
  var currentDate;
  var currentDay;
  var ampm;

  var sleepSound;
	var sleepSoundOnOff;

  var faceOnOff;
  var faceColor;

  var temperature;

  var alarmTime;
  var alarmHour;
  var alarmMinute;
  var alarmAMPM;
  var alarmSound;
	var alarmOnOff;
  var alarmTime;

  var currentCommand;
  var nightlight="off";

  this.switchDisplay=function(newDisplay,waitTime){
    $(document).ready(function(){
    setTimeout(function(newDisplay){document.getElementById("currentDisplay").innerHTML=document.getElementById(newDisplay).innerHTML;},waitTime);
  });
  }

  this.OpenWeatherWidget=function()
  {
  		$(document).ready(function(){
  			var temperature="<span id='tempDigits'>" + document.getElementsByClassName("aw-temperature-today")[0].innerHTML +"F</span>";
  			alert(temperature);
  			document.getElementById("temperatureDisplay").innerHTML = temperature;

        this.switchDisplay("temperatureDisplay",0);
        this.switchDisplay("clockDisplay",6000)
  			});


  }

  this.setTime=function() {
    							// setTime will set the time for a Moshi object.
                  this.currentTime=new Date();
  }

  this.getTime=function() {
    							// getTime will return the current time stored in the Moshi object.

                  return this.currentTime;
  }

  this.displayTime=function() {
    							// displayTime will show the time.
    							// The time is going to be in a <div></div> with an id of moshiTime.
    							// Then we will use the jQuery show to turn on the display.

  }

  this.displayMoshiFace=function() {
   							// will show the clock and do everything it's doing right now.
                // It will call displayTime.  It might also call display alarmIcon. displayDate, displayLightSwitch

  }

  this.hideTime=function() {
    						// Hide time will be triggered whenever something else displays.

  }

  this.sayTime=function() {
  							// Say time will say the time by putting together the audio files for the current time.
    var timeIs=document.createElement("AUDIO");
    timeIs.src="moshivoice/the_time_is.wav";
    timeIs.play();
    this.setTime();
    var timeToSay= new MoshiTime(this.getTime());
    timeToSay.setMoshiTime();
    setTimeout(function(){timeToSay.sayTime();},1250);

  }

  this.getFaceColor=function() {
    						// Get face color will get the current color moshi is on.
    return this.faceColor;
  }

  this.setFaceColor=function(newColor) {
    						// Set face color will change it during another time.
    this.faceColor=newColor;
  }

  this.displayFaceColor=function() {
    						// Display face color will make it so that it displays that desired color.
                document.body.style.backgroundColor=this.getFaceColor();
  }

  this.getDate=function() {
    						// Get date will get the current date.
                  return this.currentDate;
  }

  this.setDate=function() {
    						// Set date will set the date variable just like the time.
                this.currentDate=new Date();

  }

  this.displayDate=function() {
    						// Display date will display the date.
                return this.getDate();
  }

  this.SayDate=function() {
    						// Say date will say the date just like the time.
                var dateIs=document.createElement("AUDIO");
                dateIs.src="moshivoice/today_is.wav";
                dateIs.play();
                this.setDate();
                var dateToSay= new Moshidate(this.getDate());
                timeToSay.setMoshiDate();
                setTimeout(function(){dateToSay.sayDate();},1250);
  }
  this.getDay=function() {
    						// Get day i think will get the current day of the week or month.
  }
  this.setDay=function() {
    						// Set day will set the day of the week or month it got.
  }
  this.displayDay=function() {
    						// Display day will display it just how everything else was.
  }
  this.sayDay=function() {
    						//
  }
  this.setAlarmTime=function() {
    						// Set alarm time makes it so that you can set the alarm time.


				this.setAlarmMinute();
    		this.setAlarmHour();
    		this.setAlarmAMPM();
        this.alarmTime = new Date();
        this.alarmTime.setMinutes(this.getAlarmMinute());
      	this.alarmTime.setHours(this.getAlarmHour());
  }
  this.sayAlarmTime=function() {
    						// speaks the time the alarm is set to
        var alarmIsSetTo=document.createElement("AUDIO");
        alarmIsSetTo.src="moshivoice/the-alarm-is-set-to.wav";
        alarmIsSetTo.play();

        var alarmToSay= new MoshiTime(this.getAlarmTime());
        alarmToSay.setMoshiTime();
        setTimeout(function(){alarmToSay.sayTime();},1250);

  }
	this.getAlarmTime=function() {
    						// Get alarm time will grab the alarm time.
    		return this.alarmTime;

  }
  this.getAlarmMinute=function(){
    return this.alarmMinute;
  }
  this.getAlarmHour=function(){
    return this.alarmHour;
  }
  this.getAlarmAMPM=function(){
    return this.alarmAMPM;
  }
  this.setAlarmMinute=function(){
		this.alarmMinute=Math.round(document.getElementById("minuteselect").value);
	}

	this.setAlarmHour=function(){
		this.alarmHour=Math.round(document.getElementById("hourselect").value);
	}

	this.setAlarmAMPM=function(){
		this.alarmAMPM=document.getElementById("ampmselect").value;
	}
  this.turnAlarmOn=function() {
    						// Turn alarm on and off enables you to turn on and off the alarm.
  }
  this.turnAlarmOff=function() {
    						//
  }
  this.checkAlarmTime=function() {
    						// Check alarm time makes it so that it checks the alarm for making different functions work.
                if (alarmAMPM=="pm") {
                    if (alarmHour < 12) {
                      alarmHour=alarmHour+12;
                    }
                }
                if (this.getCurrentHour() == alarmHour) {
                  if (this.getCurrentMinute == alarmMinute) {
                    this.turnAlarmSoundOn();
                  }
                }
  }
  this.getCurrentHour=function() {
    return this.getTime().getHours();
  }
  this.getCurrentMinute=function() {
    return this.getTime().getMinutes();
  }
  this.getAlarmSound=function() {
    						// Get alarm sound will look at what the alarm sound is at so that when the alarm is set, the correct alarm sound is played.
  }
  this.setAlarmSound=function() {
    						// Set alarm sound will be triggered when you select an alarm sound.
  }
  this.turnAlarmSoundOn=function() {
    						// Not sure what Turn alarm sound on and off do exactly.
  }
  this.turnAlarmSoundOff=function() {
    						//
  }
  this.displayAlarmIcon=function() {
    						//
  }
  this.hideAlarmIcon=function() {
    						// hide alarm icon means when alarm is turned off.
  }
  this.getSleepSound=function() {
    						// get and set sleep sound will get and set the current sleep sound number.
  }
  this.setSleepSound=function() {
    						//
  }
  this.turnSleepSoundOn=function() {
    						// Turn sleep sound on will be triggered when you click play sleep sound.
  }
  this.turnSleepSoundOff=function() {
    						// Turn sleep sound off is triggered when the sleep sound is done.
  }
  this.startNightLight=function() {
    						// Start night light be triggered when night light is clicked.
  }
  this.playNightLight=function() {
    						// The night light should run for 5 minutes or until the screen is clicked while the sleep sound is on.
    						// The night light should run for 5 minutes or until cancelled by command otherwise.
    						// The colors switch every 3 seconds.
		var nightLightColorCounter;
    var nightLightColorArray = ["#1a0aff","#00ffff","#00ff55","#a8ff64","#de0614","#a806de"];
    nightLightColorCounter++;
    if(nightLightColorCounter > (nightLightColorArray.length - 1)){
      nightLightColorCounter = 0;
    }
    this.setFaceColor(nightLightColorArray[nightLightColorCounter]);
    this.displayFaceColor();

  }
  this.getTemperature=function() {
    						// Get temperature will get the temperature from the widget.
  }
  this.setTemperature=function() {
    						// Set temperature will set the temperature variable.
  }
  this.displayTemperature=function() {
    						// Display temperature will display the temperature on moshi's display.
  }
  this.hideTemperature=function() {
    						// Hide temperature will be triggered when the function times out.
  }
  this.acceptCommand=function() {
    						// Accept command will look at the command you chose.
                var newCommand=document.getElementById("commands").value;
                switch(newCommand){
              		case "time":
              			this.sayTime();
                    $("#popupcontent").hide();
              			break;
              		case "alarm":
              			this.sayAlarmTime();
              			$("#popupcontent").hide();
              			break;
              		case "setalarm":
              			chooseAlarmTime();
              			$("#popupcontent").hide();
              			break;
              		case "alarmsound":
              			chooseAlarmSound();
              			$("#popupcontent").hide();
              			break;
              		case "sleepsound":
              			chooseSleepSound();
              			$("#popupcontent").hide();
              			break;
              		case "playsleepsound":
              			SoundChoice.play();
              			onNightLight();
              			setTimeout(function(){offNightLight();blackbrown('on');},300000);
              			$("#popupcontent").hide();
              			break;
              		case "moshidate":
              			showMoshiDate();
              			$("#popupcontent").hide();
              			break;
              		case "temperature":
              		  this.OpenWeatherWidget();
              	    $("#popupcontent").hide();
              		  break;
              		case "nightlight":
                    if (nightlight=="off") {
                    onNightLight();
                    nightlight="on";
              			$("#popupcontent").hide();
                    }
                    else {
                    offNightLight();
                    nightlight="off";
                    $("#popupcontent").hide();
                    }
              			break;
              	}
  }
  this.displayDialogBox=function() {
    						// Display dialog box will display the command dialog box.
  }
  this.hideDialogBox=function() {
    						// Hide dialog box is triggered when you select a command.
  }

}
