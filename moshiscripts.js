// Global Variables
	var slide_counter = 0;
	var slide_array = [
	"<style>body {background-color: #1a0aff;}</style>",
	"<style>body {background-color: #00ffff;}</style>",
	"<style>body {background-color: #00ff55;}</style>",
	"<style>body {background-color: #a8ff64;}</style>",
	"<style>body {background-color: #de0614;}</style>",
	"<style>body {background-color: #a806de;}</style>",

];

	var slide_element;
	var offon;
	var alarmHour;
	var alarmMinute;
	var alarmAMPM;


// Moshi Weather functions -----------------------------------------------------


// Moshi Date functions --------------------------------------------------------
function showMoshiDate()
{
	var d = new Date();
  var n = d.getDay();
	switch (n) {
		case 1: document.getElementById("MON").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 2: document.getElementById("TUE").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 3: document.getElementById("WED").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 4: document.getElementById("THU").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 5: document.getElementById("FRI").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 6: document.getElementById("SAT").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
		case 7: document.getElementById("SUN").innerHTML=document.getElementById("datearrow").innerHTML;
		break;
	}

	showCustomPopUpWindow (-400,-400,200,200, 'moshidate')
	setTimeout(function(){hidePopUpWindow('moshidate')},10000);
}


// open and close pop up windows -----------------------------------------------

function hidePopUpWindow(PopName){
     var popUp = document.getElementById(PopName.toString());
     popUp.style.visibility = "hidden";
		 document.getElementById("commands").value=null;
}


function showCustomPopUpWindow(top,left,width,height,PopName){
		var popUp = document.getElementById(PopName.toString());

		popUp.style.top = top + "px";
		popUp.style.left = left + "px";
		popUp.style.width = width + "px";
		popUp.style.height = height + "px";


		popUp.style.visibility = "visible";
		$("#popupcontent").show();
}

// Alarm functions -------------------------------------------------------------


function checkAlarm(){
		var time = new Date().getHours();
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
		if (alarmAMPM=="pm") {
				if (alarmHour < 12) {
					alarmHour=alarmHour+12;
				}
		}
    if (currentHour == alarmHour) {
 			if (currentMinute == alarmMinute) {
				if (currentHour == 12) {
					if (alarmAMPM != "am") {
					myMoshi.alarmSound.play();
					}

				} else {
				myMoshi.alarmSound.play();
				}
			}
		}
}

// set alarm functions -------------------------------------------------------
function showAlarmIcon(){
	document.getElementById("alarmIcon").style.visibility="visible";
}

// Time functions --------------------------------------------------------------
function startTime(){

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

		checkAlarm();
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
// old moshi colors.js
// Night LIght functions -------------------------------------------------------

function blackbrown(backgrounddisplay){
	offNightLight();
	if (backgrounddisplay=="on")
	{
		document.getElementById("nightlight").innerHTML = "<style>body {background-color: #605a39;}</style>";
		document.getElementById("lightswitch").innerHTML="<a href='#lightswitch' onclick=blackbrown('off');><img src='black-brown-toggle-switch-on.png' width='50' height='74'></a>";

	} else {
		document.getElementById("nightlight").innerHTML = "<style>body {background-color: #000000;}</style>";
		document.getElementById("lightswitch").innerHTML="<a href='#lightswitch' onclick=blackbrown('on');><img src='black-brown-toggle-switch-off.png' width='50' height='74'></a>";
	}
}
function Next(){
	if (offon=="on") {
	slide_counter++;
	if(slide_counter > (slide_array.length - 1)){
		slide_counter = 0;
	}
	setTimeout('switchSlide()',1000);
	}
}

function switchSlide(){
	if (offon=="on") {
	slide_element.innerHTML = slide_array[slide_counter];
	setTimeout('Next()',2000);
	}
if (offon=="off") {
	slide_counter = 0;
	slide_element.innerHTML = "<style>body {background-color: #605a39;}</style>"
	offNightLight();
		  }
}

function onNightLight(){
	if (offon != "on") {
	offon="on";
	slide_element = document.getElementById("nightlight");
	switchSlide();
	}
}

function offNightLight(){
	offon="off";
	slide_counter = 0;
	slide_element.innerHTML = "<style>body {background-color: #605a39;}</style>"
	return;
}

function OpenWeatherWidget()
  {
  showCustomPopUpWindow (-500,0,300,300, 'temperatureDisplay');
	$(document).ready(function(){
 	var temperature=document.getElementsByClassName("aw-temperature-today")[0].innerHTML;
 	document.getElementById("temperatureDisplay").innerHTML = temperature;
 	});
  weathertimer=setTimeout(function(){hidePopUpWindow('temperatureDisplay')},6000);
  }
