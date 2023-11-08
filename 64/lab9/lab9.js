var c = document.getElementById('canvas');
var canvas = c.getContext('2d');
var button = document.getElementById("button");
var values = [7];

function start()
{
  var button=document.getElementById("button");
  if (button.getAttribute('value')=="Нарисовать") 
  {
      if (check()==0) 
      {
          button.setAttribute('value', "Очистить");
          clear();
      }
      else window.alert("Вводите правильное значение");
  } 
  else 
  {
      button.setAttribute('value', "Нарисовать");
      clear();
  }
}

function check() {
  values[0] = document.getElementById("a_").value;
  values[1] = document.getElementById("b_").value;
  values[2] = document.getElementById("c_").value;
  values[3] = document.getElementById("x_min").value;
  values[4] = document.getElementById("x_max").value;
  values[5] = document.getElementById("y_min").value;
  values[6] = document.getElementById("y_max").value;
  var i=0;
  for (i=0; i<7; i++) 
  {
      if(isNaN(values[i]))  return -1;
	  values[i] = parseFloat(values[i]);	
  }
  if(values[3]>=values[4] || values[5]>=values[6]) return -1;
  return 0;
}

function clear() 
{
  canvas.clearRect(0, 0, 300, 200);
    var button=document.getElementById("button");
    var a=values[0];
    var b=values[1]; 
    var c=values[2];
    var x_min=values[3]; 
    var x_max=values[4]; 
    var y_min=values[5]; 
    var y_max=values[6];
    var width=300/(x_max-x_min), height=200/(y_max-y_min);
    draw(x_min, x_max, y_min, y_max, width, height);
    if (button.getAttribute('value') == "Очистить") {
        var x=x_min, y;   
        canvas.strokeStyle="red";
        canvas.lineWidth=0.5;
        var interval = 0.0001;
       canvas.fillStyle='red';
		canvas.strokeStyle="red";
		canvas.lineWidth=2.0;
		y=a*Math.pow(x,2)+b*x+c;
		y_temp = y;
		x_temp = x;
		var y_temp, x_temp;
		for (x; x<=x_max+0.1; x+=interval) {
            y=a*Math.pow(x,2)+b*x+c;             
			canvas.beginPath();
      		canvas.moveTo((x_temp-x_min)*width, 200-((y_temp-y_min)*height));
      		canvas.lineTo((x-x_min)*width, 200-((y-y_min)*height));
      		canvas.closePath();
      		canvas.stroke();
			y_temp = y;
			x_temp = x;
        }
    }
}

function draw(x_min, x_max, y_min, y_max, width, height) {
  canvas.fillStyle="black"; 
  canvas.strokeStyle="black";
  canvas.lineWidth=0.5;
  var i=0;

  max_x = x_max;
    min_x = x_min;
    max_y = y_max;
    min_y = y_min;
    while(max_x < 1 && max_x != 0)
    {
        max_x *= 10;
        if(max_x == 1) max_x *= 10;
    }
    while(Math.abs(min_x) < 1 && min_x != 0)
    {
        min_x *= 10;
        if(Math.abs(min_x) == 1) min_x *= 10;
    }
    while(max_y < 1 && max_y != 0)
    {
        max_y *= 10;
        if(max_y == 1) max_y *= 10;
    }
    while(Math.abs(min_y) < 1 && min_y != 0)
    {
        min_y *= 10;
        if(Math.abs(min_y) == 1) min_y *= 10;
    }

    var width2=300/(max_x-min_x), heightt=200/(max_y-min_y)
	if (width2 == 300) width2 /= 10;
    if (heightt == 200) heightt /= 10;	 
  for (i; i<300; i+=width2) {
      canvas.beginPath();
      canvas.moveTo(i, 0);
      canvas.lineTo(i, 200);
      canvas.closePath();
      canvas.stroke();
  }
  
  for (i=0; i<200; i+=heightt) {
      canvas.beginPath();
      canvas.moveTo(0, i);
      canvas.lineTo(300, i);
      canvas.closePath();
      canvas.stroke();
  }
  canvas.fillRect(0, Math.abs(y_max*height), 300, 2); 
  canvas.fillText(x_min, 10, Math.abs(y_max*height-10));
  canvas.fillText(x_max, 265, Math.abs(y_max*height-10));
  canvas.fillRect(Math.abs(x_min*width), 0, 2, 200);
  canvas.fillText(y_min, Math.abs(x_min*width-10), 190);
  canvas.fillText(y_max, Math.abs(x_min*width-10), 15);
}

