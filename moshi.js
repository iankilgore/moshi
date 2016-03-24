function Moshi()
{
  var currentTime;
  var currentDate;
  var currentDay;
  var ampm;
  var sleepSound="sound_1";
	var sleepSoundOnOff;

  var faceOnOff;
  var faceColor;

  var temperature;

  var alarmTime;
  var alarmHour;
  var alarmMinute;
  var alarmAMPM;
  var alarmSound="alarm_1";
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
  			document.getElementById("temperatureDisplay").innerHTML = temperature;

        this.switchDisplay("temperatureDisplay",0);
        this.switchDisplay("clockDisplay",6000)
  			});
  }

  this.oldOpenWeatherWidget=function()
    {
    showCustomPopUpWindow (-500,0,300,300, 'temperatureDisplay');
  	$(document).ready(function(){
   	var temperature=document.getElementsByClassName("aw-temperature-today")[0].innerHTML;
   	document.getElementById("temperatureDisplay").innerHTML = temperature;
   	});
    weathertimer=setTimeout(function(){hidePopUpWindow('temperatureDisplay')},6000);
    }

  this.chooseAlarmSound=function() {
  	var alarmSoundSet=document.createElement("AUDIO")
  	alarmSoundSet.src="moshivoice/to_choose_an_alarm_sound.wav";
  	alarmSoundSet.play();
  	showCustomPopUpWindow(200,200,200,200,"AlarmMenu");

  }

  this.chooseSleepSound=function() {
  	var sleepSoundSet=document.createElement("AUDIO");
  	sleepSoundSet.src="moshivoice/to_choose_a_sleep_sound.wav";
  	sleepSoundSet.play();
  	showCustomPopUpWindow(200,200,200,200,"sleepsoundMenu");
  }

  this.setSleepSound=function(choice) {
  	this.sleepSound = document.getElementById(choice);
  }

  this.setAlarmSound=function(choice) {
    						// Set alarm sound will be triggered when you select an alarm sound.
                	this.alarmSound = document.getElementById(choice);
  }

  this.setTime=function() {
    							// setTime will set the time for a Moshi object.
                  this.currentTime=new Date();
  }

  this.getTime=function() {
    							// getTime will return the current time stored in the Moshi object.
                  return this.currentTime;
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

  this.chooseAlarmTime=function() {
  var alarmSet=document.createElement("AUDIO");
  alarmSet.src="moshivoice/alarm-to-sound.wav";
  alarmSet.play();
  showCustomPopUpWindow (-531,0,300,100, 'setalarmmenu');  
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

  this.checkAlarmTime=function() {
    						// Check alarm time makes it so that it checks the alarm for making different functions work.
                //if (alarmAMPM=="pm") {
                  //  if (alarmHour < 12) {
                    //  alarmHour=alarmHour+12;
                    //}
                //}
                //if (this.getCurrentHour() == alarmHour) {
                  //if (this.getCurrentMinute == alarmMinute) {
                    //this.turnAlarmSoundOn();
                  //}
                //}
  }
  this.getCurrentHour=function() {
    return this.getTime().getHours();
  }
  this.getCurrentMinute=function() {
    return this.getTime().getMinutes();
  }

  this.setAlarmSound=function(choice) {
    						// Set alarm sound will be triggered when you select an alarm sound.
                	this.alarmSound = document.getElementById(choice);
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
                document.body.style.backgroundColor=this.getFaceColor;
  }

  this.acceptCommand=function() {
    						// Accept command will look at the command you chose.
                var newCommand=document.getElementById("commands").value;
                document.getElementById("commands").value="COMMAND";
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
              			this.chooseAlarmTime();
              			$("#popupcontent").hide();
              			break;
              		case "alarmsound":
              			this.chooseAlarmSound();
              			$("#popupcontent").hide();
              			break;
              		case "sleepsound":
              			this.chooseSleepSound();
              			$("#popupcontent").hide();
              			break;
              		case "playsleepsound":
              			this.sleepSound.play();
              			//onNightLight();
              		//	setTimeout(function(){offNightLight();blackbrown('on');},300000);
              			$("#popupcontent").hide();
              			break;
              		case "moshidate":
              			showMoshiDate();
              			$("#popupcontent").hide();
              			break;
              		case "temperature":
              		  this.oldOpenWeatherWidget();
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

}
