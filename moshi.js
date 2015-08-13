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
  var alarmSound;
	var alarmOnOff;
  var alarmTime;

  var currentCommand;

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
  }
  this.turnAlarmOn=function() {
    						// Turn alarm on and off enables you to turn on and off the alarm.
  }
  this.turnAlarmOff=function() {
    						//
  }
  this.getAlarmTime=function() {
    						// Get alarm time will grab the alarm time.
  }
  this.checkAlarmTime=function() {
    						// Check alarm time makes it so that it checks the alarm for making different functions work.
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
  this.stopNightLight=function() {
    						// Same with off.
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
  }
  this.displayDialogBox=function() {
    						// Display dialog box will display the command dialog box.
  }
  this.hideDialogBox=function() {
    						// Hide dialog box is triggered when you select a command.
  }

}
