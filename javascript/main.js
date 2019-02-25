window.onload = function(){
	time();
	ampm();
	whatDay();
	setInterval(function(){
		time();
		ampm();
		whatDay();
	}, 1000);
};

function time(){
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	hours = (hours > 12) ? (hours - 12) : hours;
	hours = (hours === 0) ? 12 : hours;

	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}

function addZero (val){
	return (val <= 9) ? ("0" + val) : val;
}

function ampm(){
	var date = new Date(),
		hours = date.getHours(),
		am = document.getElementsByClassName("am")[0].classList,
		pm = document.getElementsByClassName("pm")[0].classList;
	
	(hours >= 12) ? pm.add("light-on") : am.add("light-on");
	(hours >= 12) ? am.remove("light-on") : pm.remove("light-on");
}

function whatDay(){
	var date = new Date(),
		currentDay = date.getDay(),
		days = document.getElementsByClassName("day");

	for (x in days){
		var classArr = days[x].classList;
		(classArr !== undefined) && ((x == currentDay) ? classArr.add("light-on") : classArr.remove("light-on"));
	}
}