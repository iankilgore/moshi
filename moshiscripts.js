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
<<<<<<< HEAD
//	alert (d.toDateString());
	showMoshiDate();
=======
	//alert (d.toDateString());
	showmoshidate();
>>>>>>> 2f19a580ac7409e5e8ee8df56cdf83020eee2505
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
<<<<<<< HEAD
  function showMoshiDate() {
			d = new Date();
			alert (d.toDateString());

	}

=======
function showmoshidate()
{
	d = new Date();
	showNewPopUpWindow (200, 200, 'moshidate')
>>>>>>> 2f19a580ac7409e5e8ee8df56cdf83020eee2505

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
