var h=0;
function key(e){
	e = e || window.event;
	document.getElementById("mouse").style = "position: absolute; top: 35%; left: 42.5%;";    
}
function move(e){ 
	e = e || window.event;
	var mouse = document.getElementById("mouse");
	if(h == 1){
		mouse.style = "position: absolute;" ;
		mouse.style.left = e.clientX - 100 + "px";
		mouse.style.top = e.clientY + "px";
	}
}
function down(e){ 
	e = e || window.event;
	if(e.which == 1){
		document.getElementById("left").style.backgroundColor = "grey";
		h = 1;
		move(e);
	}
	if(e.which == 2){
		document.getElementById("center").style.backgroundColor = "grey";
		h = 0;
	}
	if(e.which == 3 ){
		document.getElementById("right").style.backgroundColor = "grey";
		h = 0;
	}
}
function up(){
	document.getElementById("left").style.backgroundColor = "white";
	document.getElementById("center").style.backgroundColor = "white";
	document.getElementById("right").style.backgroundColor = "white";
	h = 0;
}
