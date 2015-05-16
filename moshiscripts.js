function moshicommand(){
var newcommand=document.getElementById("commands").value;

switch(newcommand){
case "time":
	sayTime ();
	hidePopUpWindow('popupcontent');
	break;
case "alarm":
	AlarmChoice.play();
	hidePopUpWindow('popupcontent');
	break;
case "setalarm":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "alarmsound":
	chooseAlarmSound();
	hidePopUpWindow('popupcontent');
	break;
case "sleepsound":
	chooseSleepSound();
	hidePopUpWindow('popupcontent');
	break;
case "playsleepsound":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "moshidate":
	showmoshidate();
	hidemoshitime();
	hidePopUpWindow('popupcontent');
	setTimeout(function(){hidemoshitime()},10000);
	showmoshitime();
	hidemoshidate();
	break;
case "temperature":
	OpenWeatherWidget();
	hidePopUpWindow('popupcontent');
	break;
case "nightlight":
	nightlight();
	hidePopUpWindow('popupcontent');
	break;
}

}

function OpenWeatherWidget()
{
	  showCustomPopUpWindow (-300,0,300,300, 'weatherwidget');
	  weathertimer=setTimeout(function(){hidePopUpWindow('weatherwidget')},6000);
	}
function showmoshidate()
{
	d = new Date();
	showCustomPopUpWindow (200,200,200,200, 'moshidate')

}

function hidePopUpWindow(PopName){
     var popUp = document.getElementById(PopName.toString());
     popUp.style.visibility = "hidden";
		 document.getElementById("commands").value=null;
  }

function chooseAlarmSound() {
	showCustomPopUpWindow(200,200,200,200,"AlarmMenu")

}
function chooseSleepSound() {
	showCustomPopUpWindow(200,200,200,200,"sleepsoundMenu")

}

function setAlarmChoice(choice) {
	AlarmChoice = document.getElementById(choice);
}
function setSoundChoice(choice) {
	SoundChoice = document.getElementById(choice);
}

function showCustomPopUpWindow(top,left,width,height,PopName){
		var popUp = document.getElementById(PopName.toString());

		popUp.style.top = top + "px";
		popUp.style.left = left + "px";
		popUp.style.width = width + "px";
		popUp.style.height = height + "px";


		popUp.style.visibility = "visible";
	}

	function startTime()
		{
		var timedifference=0;
		var today=new Date();
		var h=today.getHours();
		var ampm="AM";
		if (h > 11)
			{
			if (h != 12)
			{
			h=h-12;
			}
			ampm="PM";
			};
		if (h==0){
			h=12;
			}
		var m=today.getMinutes();
		var s=today.getSeconds();
		// add a zero in front of numbers<10
		m=checkTime(m);
		s=checkTime(s);
		document.getElementById('ampm').innerHTML=ampm;
		document.getElementById('moshitime').innerHTML=h+":"+m;
		t=setTimeout(function(){startTime()},500);
		}

	function checkTime(i)
		{
		if (i<10)
  		{
  		i="0" + i;
  		}
		return i;
		}
