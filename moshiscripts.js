function moshicommand(){
var newcommand=document.getElementById("commands").value;

switch(newcommand){
case "time":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "alarm":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "setalarm":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "alarmsound":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "sleepsound":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "playsleepsound":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "moshidate":
//	d = new Date();
	//alert (d.toDateString());
	showmoshidate();
	hidePopUpWindow('popupcontent');
	//
	break;
case "temperature":
	alert (newcommand);
	hidePopUpWindow('popupcontent');
	break;
case "nightlight":
	nightlight();
	hidePopUpWindow('popupcontent');
	break;
}

}
function showmoshidate()
{
	d = new Date();
	showNewPopUpWindow (200, 200, 'moshidate')

}
  function hidePopUpWindow(PopName){
     var popUp = document.getElementById(PopName.toString());
     popUp.style.visibility = "hidden";
		 document.getElementById("commands").value=null;
  }

	function showNewPopUpWindow(w,h,PopName){
     var popUp = document.getElementById(PopName.toString());

     popUp.style.top = "200px";
     popUp.style.left = "200px";
     popUp.style.width = w + "px";
     popUp.style.height = h + "px";


     popUp.style.visibility = "visible";
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
		if (h > 12)
			{
			h=h-12;
			ampm="PM";
			};

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
