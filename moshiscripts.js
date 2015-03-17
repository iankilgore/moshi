
  function showPopup(w,h){
     var popUp = document.getElementById("popupcontent");

     popUp.style.top = "200px";
     popUp.style.left = "200px";
     popUp.style.width = w + "px";
     popUp.style.height = h + "px";


     popUp.style.visibility = "visible";
  }

  function hidePopup(){
     var popUp = document.getElementById("popupcontent");
     popUp.style.visibility = "hidden";
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
