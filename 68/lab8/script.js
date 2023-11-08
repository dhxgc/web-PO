var  i = 0, count; var pMas;
var Rcolors = [" red "," yellow "," pink "," lightblue "," lightgreen "];
function button(){
	if ( document.getElementById("Stop").hidden == true ) {
			document.getElementById("Start").hidden = true;
			document.getElementById("Stop").hidden = false;
		if(Number.isInteger(parseInt(document.getElementById("time").value)) && document.getElementById("time").value > 1)
			 Timer = setInterval(slider, (document.getElementById("time").value)/5);
		else {
			document.getElementById("time").value = "1000";
			Timer = setInterval(slider, 1000/5);
		}
		slider();
	}
	else {
		clearTimeout(Timer);
		document.getElementById("Start").hidden = false;
		document.getElementById("Stop").hidden = true;
	}
}


function random(min,max){
		return parseInt(Math.random()*(max - min)+min);
}


function Randomcolors(){
	var pMas = [];
	for (var i=0; i<2; i++){

			var rand1= random(0,5);
			var rand2= random(0,5);

		var Color1=Rcolors[rand1];
		Rcolors[rand1]=Rcolors[rand2];
		Rcolors[rand2]=Color1;
	}
	for(i = 0; i <= document.getElementById("menu").value; i++) {
		pMas[i]=Rcolors[i];
		document.getElementById("colors").innerHTML = pMas;
	}
	count = i;
}

function slider(){
	block1 = document.querySelector(".first");
	block2 = document.querySelector(".second");
	pos1 = window.getComputedStyle(block1).getPropertyValue("left");
	pos1 = parseInt(pos1);
	pos2 = window.getComputedStyle(block2).getPropertyValue("left");
	pos2 = parseInt(pos2);
	if(pos1 <= -400){
		block1.style.background = Rcolors[i];
		pos1 = 400;
		if(parseInt(count) != 1) i++;
		if(i >= parseInt(count)) i = 0;
	}
	if(pos2 <= -400){
		j = 1;
		block2.style.background = Rcolors[i];
		pos2 = 400;
		if(parseInt(count) != 1) i++;
		if(i >= parseInt(count)) i = 0;
	}
	block1.style.left = pos1 - 80 + "px";
	block2.style.left = pos2 - 80 + "px";
}
