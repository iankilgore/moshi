var slide_counter = 0;
var slide_array = [
"<style>body {background-color: #1a0aff;}</style>",
"<style>body {background-color: #00ffff;}</style>",
"<style>body {background-color: #00ff55;}</style>",
"<style>body {background-color: #a8ff64;}</style>",
"<style>body {background-color: #de0614;}</style>",
"<style>body {background-color: #a806de;}</style>",
// "<style>body {background-color: #605a39;}</style>",
];

var slide_element;
var offon;
function blackbrown(backgrounddisplay){
	OffNightLight();
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
	OffNightLight();
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
