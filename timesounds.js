
function sayTime()
{
  // alert ("about to say the time");
  var currentTime=new Date();
  var currentHour=currentTime.getHours();
  var currentMinute=currentTime.getMinutes();
  var currentTens=parseInt(currentMinute/10);
  var currentOnes=currentMinute % 10;

  var sayTimeIs=document.createElement("AUDIO");
  sayTImeIs.src="moshivoice/the_time_is.wav";

  var sayAMPM=document.createElement("AUDIO");
  sayAMPM.src="moshivoice/am.wav";
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
  }

}
