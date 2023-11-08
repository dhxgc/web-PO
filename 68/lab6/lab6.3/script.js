var start_game_user, end_game_user, search_of_the_number, pc, search_for_pc1, search_for_pc2;
var id = 0, start_game_pc, end_game_pc;
function user_guesses()
{
	var number, temp_array = [], attempt = 0, counter, counter2 = 0, bool = false;
	var answers;
	if(id == 0)
	{
		start_game_user = Math.floor(Math.random()*91);
		end_game_user = Math.floor(Math.random()*(100-(start_game_user+10)+1)+(start_game_user+10));
		alert("От "+start_game_user+" до "+end_game_user);
		id++;
	}
	else
	{
		start_game_user = start_game_pc;
		end_game_user = end_game_pc;
	}
	answers = Math.floor(Math.random()*(parseInt(end_game_user)-parseInt(start_game_user))+parseInt(start_game_user));
	while(1)
	{
		number = window.prompt("Введите число из указаного диапазона: "+start_game_user+" - "+end_game_user);
		if(parseInt(number)>=start_game_user && parseInt(number)<=end_game_user)
		{
			for(counter = 0; counter < attempt; counter++)
				if(temp_array[counter] == number)
				{
					alert("Вы вводили эот номер");
					bool = true;
				}
			if(bool != true)
			{
				temp_array[counter2] = number;
				attempt++;
				if(number<answers)
				{
					alert("Загадываемое число больше введённого вами.");
				}
				if(number>answers)
				{
					alert("Загадываемое число меньше введённого вами.");
				}
				if(number==answers)
				{
					alert("Вы угадали, поздравляем!");
					return attempt;
					break;
				}
				counter2++;
			}
			else bool = false;
		}
		else alert("Error");
	}
}

function pc_quesses()
{
	var attempt = 0, counter, c_for_search;
	var t_for_arrays = 0, array_itself=[], er_bool = false;
	if(id > 0)
	{
		start_game_pc = start_game_user;
		end_game_pc = end_game_user;
		search_for_pc1 = start_game_user;
		search_for_pc2 = end_game_user;
	}
	while(1)
	{
		if(id == 0)
		{
			do
			{
				start_game_pc = window.prompt("Введите начальное число диапазона:");
				end_game_pc = window.prompt("Введите конечное число дапазона:");
				if((!(Number.isInteger(+start_game_pc))) || (!(Number.isInteger(+end_game_pc))) || (end_game_pc-start_game_pc) < 10 || start_game_pc < 0 || start_game_pc > 100 || end_game_pc < 0 || end_game_pc > 100)
				{
					alert("Ошибка!");
				}
				else
				{
					search_for_pc1 = start_game_pc;
					search_for_pc2 = end_game_pc;
					break;
				}
			}
			while(1);
			id++;
		}
		c_for_search = searching();
		array_itself[t_for_arrays] = c_for_search;
		t_for_arrays++;
		for(counter = 0; counter < t_for_arrays; counter++)
		{
			if(c_for_search == array_itself[counter] && counter != t_for_arrays - 1)
			{
				er_bool = true;
			}
		}
		if(er_bool == true)
		{
			alert("Ваш номер это - "+c_for_search);
			break;
		}
		do
		{
			pc = prompt("Ваше число больше чем "+c_for_search+"?\n 1 - Да\n 2 - Нет");
			attempt++;
		}
		while (pc != 1 && pc != 2);
	}
	return attempt;
}

function searching()
{
	if(pc == 1)
	{
		search_for_pc1 = search_of_the_number + 1;
	}
	if(pc == 2)
	{
		search_for_pc2 = search_of_the_number;
	}
	search_of_the_number = Math.floor((parseInt(search_for_pc1) + parseInt(search_for_pc2)) / 2);
	return search_of_the_number;	
}

var user, computer, enter;
do
{
	enter = window.prompt("Кто будет угадывать?\n 1 - Компьютер\n 2 - Пользователь");
	if(enter == 1)
	{
		computer = pc_quesses();
		alert("Угадывает пользователь");
		user = user_guesses();
	}
	if(enter == 2)
	{
		user = user_guesses();
		alert("Угадывает компьютер");
		computer = pc_quesses();
	}
}
while(enter != 1 && enter != 2);
if(user < computer)
{
	document.write("<h1>Результаты:</h1>");
	document.write("<p>Победил пользователь!</p>");
	document.write("<p>Пользователь угадал число в "+user+" ходов.<br>Компьютер угадал число за "+computer+" ходов.</p>");
}
if(user > computer)
{
	document.write("<h1>Результаты:</h1>");
	document.write("<p>Победил компьютер!</p>");
	document.write("<p>Компьютер угадал число в "+computer+" ходов.<br>Пользователь угадал число за "+user+" ходов.</p>");
}
if(user == computer)
{
	document.write("<h1>Результаты:</h1>");
	document.write("<p>Пользователь и компьютер угадали число за одинаковое число шагов.<br> Число ходов: "+user+".</p>");
}

