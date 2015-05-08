function sayTime()
{
alert ("about to say the time");
var currentTime=new Date();
var currentHour=currentTime.getHours();
var currentMinute=currentTime.getMinutes();
var x=document.createElement("AUDIO");
var filename = document.createTextNode("command_please.wav");
x.appendChild(filename);
document.body.appendChild(x);
alert(filename.value);
alert(x.value);
// var test=document.getElementById("x");
// test.play();
alert("tried to say");
myAudio.play();

}
