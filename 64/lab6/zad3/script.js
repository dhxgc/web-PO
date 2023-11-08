function generate_diapazon_comp(){
	var top_dp, bottom_dp;
	bottom_dp = Math.floor(Math.random()*(101-0)+0);
	var top_dp = Math.floor(Math.random()*(101-bottom_dp)+bottom_dp);
	if((top_dp - bottom_dp)<10){
		if(top_dp+(10-(top_dp - bottom_dp))>100){
			bottom_dp=bottom_dp-(10-(top_dp - bottom_dp));
		}
		else{
			top_dp=top_dp+(10-(top_dp - bottom_dp));
		}
	}
	window.alert("Диапазон от"+bottom_dp+" до "+top_dp);
	return [bottom_dp,top_dp];
}

function generate_diapazon_human(){
	var flag = 1;
	while(flag){	
		var bottom_dp  = window.prompt("Введите нижний предел диапазона","0");
		var top_dp = window.prompt("Введите верхний предел диапазона","100");
		var dip = top_dp - bottom_dp;
		if((bottom_dp < top_dp) && (dip >= 10) && (bottom_dp >= 0) && (top_dp <= 100)){
			flag = 0;
		}
		else
			alert("Не правильно задан диапазон");
	}
return [bottom_dp,top_dp];
}

function generate_num(bottom_dp,top_dp){
	bottom_dp = bottom_dp + 1;
	var num =  Math.floor(Math.random()*(top_dp - bottom_dp) + bottom_dp);
	return num;
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem*1) {
            return 1;
        }
    }
    return 0;
}

function binare_search_human(bottom_dp,top_dp,num){
	flag = 1;
	var i =0;
	var arr= [];
	var bt = bottom_dp*1, tp = top_dp*1;
	var count = 0;
	var count1 = 1;
	document.write("отгадывает человек: <br>")
	while(flag){
		var num1 = prompt("Угадай число в пределах от  "+bt+" до "+tp,"");
		if(num1*1 > tp*1 || num1*1 < bt*1){
			alert("Некоректное число ");
			continue;
		}
		var das = contains(arr,num1);
		if(das == 1){
			alert("Повторяетесь ");
			count1--;
			document.write(count1+"Введенное число = "+num1+"<br>");
			count1++;
			continue;
		}
		if(das == 0){
			arr[i] = num1;
			i++;
		}
		document.write(count1+"Введенное число  = "+num1+"<br>");
		count++;
		count1++;
		if(num1 == num){
			count1++;
			alert("Угадал за "+count+" попыток");
			return count;
			flag = 0;
		}
		if(num1 > num){
			alert("Искомое число меньше "+num1);
		}
		if(num1 < num){
			alert("Искомое число больше "+num1);
		}
	}
}

function binare_searhc_comp(bottom_dp,top_dp){
	var flag = 1;
	var count = 1;
	var bt = bottom_dp, tp = top_dp;
	document.write("Отгадывает компьютер: <br>");
	while(top_dp - bottom_dp != 0){
		var x =Math.floor((bottom_dp*1+top_dp*1)/2);
		document.write(count+"Введенное число = "+x+"<br>");
		var num = prompt("Число больше "+x+"\nДа - 1 Нет - 2");
		if(num == 1){
			bottom_dp = x+1;
			count++;
		}
		if(num == 2){
			top_dp = x;
			count++;
		}
	}
x = (bottom_dp + top_dp)/2;
	x = Math.floor(x);
count--;	
alert("Угадал это число "+x);
return count;
}

function user(){
	var values = generate_diapazon_comp();
	var bot = values[0];
	var top = values[1];
	var num = generate_num(bot,top);
	var count = binare_search_human(bot,top,num);
	return [count, bot, top];
}

function comp1(bottom_dp,top_dp){
	alert("Загадайте число от "+bottom_dp+" до "+top_dp);
	var count = binare_searhc_comp(bottom_dp,top_dp);
	return count;
}

function vic(num1,num2){
	if(num1 < num2){
		alert("Победил человек");
		document.write("Победил человек");
	}
	if(num2 < num1){
		alert("Победил компьютер");
		document.write("Победил компьютер");
	}
	if(num1 == num2){
		alert("Ничья");
		document.write("Ничья");
	}
}

function comp(){
	var values = generate_diapazon_human();
	var bot = values[0];
	var top = values[1];
	var count = binare_searhc_comp(bot,top);
	return [count,bot,top];

}

function human1(bottom_dp,top_dp){
	var num = generate_num(bottom_dp,top_dp);
	var count = binare_search_human(bottom_dp,top_dp,num);
	return count;
}

function start(){
	var n = window.prompt("Кто будет отгадывать?\n1- Человек \n2- Компьютер");
	if(n == 1){
		var values = user();
		var num1 = values[0];
		var bot = values[1];
		var top = values[2];
		var num2 = comp1(bot,top);
		vic(num1,num2);
		}
	else {
		if(n == 2){
			var values = comp();
			var num2 = values[0];
			var bot = values[1];
			var top = values[2];
			var num1 = human1(bot,top);
			vic(num1,num2);
		}
		else {
			ni=window.confirm("не верное число");
				if ((ni == true)||(ni == false)){
					location.reload();
					}
		}
	}
}
start();


