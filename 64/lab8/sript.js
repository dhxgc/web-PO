var b = 0, curr_color_in_block = 0;
var width, timeout, number_colors;
var colors_rectangle = document.getElementById("colors_rectangle");
var colors_block = document.getElementById("colors_block");
var changing_speed = document.getElementById("form2").value;
var available_colors = ['blue', 'lightblue', 'red', 'white', 'yellow'];
var random_colors = [];
function start(e) {
    e = e || window.event;
    var x = document.getElementById("buttons");
    if (x.getAttribute('value') == "start") {
        x.setAttribute('value', "stop");
        x.style.marginLeft = "45%";
        if (b == 0) {
            document.getElementById("current_colors").innerHTML = "";
            colors_block.style.background = "#FFFFF5";
            width = 550;
            colors_rectangle.style.left = width + "px";
            curr_color_in_block = 0;
            color();
            b = 1;
        } else {
            move();
        }
    } else {
        x.setAttribute('value', "start");
        clearTimeout(timeout);
        x.style.marginLeft = "45%";
    }
}
function realtime_changing(e) {
    e = e || window.event;
    var x = document.getElementById("buttons");
    clearTimeout(timeout);
    document.getElementById("current_colors").innerHTML = "";
    colors_block.style.background = "#FFFFF5";
    width = 550;
    colors_rectangle.style.left = width + "px";
    curr_color_in_block = 0;
    if (x.getAttribute('value') == "start") {
        b = 0;
    }
    if (x.getAttribute('value') == "stop") {
        color();
    }
}
function check(e) {
    e = e || window.event;
    var x = document.getElementById("form2").value;
    if (x > 0 || x == 0) {
        changing_speed = document.getElementById("form2").value;
    } else {
        alert("значение не подходит условию");
        document.getElementById("form2").value = 1000;
        changing_speed = 1000;
    }
}
function shuffle(array) {
  var currentIndex=array.length, randomIndex;
  currentIndex=Math.floor(currentIndex/2);
  currentIndex=currentIndex+1;
  console.log(currentIndex);

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
function color() {
    var x = document.getElementById("form1").value;
    var y = document.getElementById("current_colors")
    var rand = [];
    shuffle(available_colors);
    for (var i = 0; i < x; i++) {
        random_colors[i] = available_colors[i];
        y.append(random_colors[i] + ", ");
    }
    move();
}
function getValue(value) {
    number_colors = value;
}
function move() {
    colors_rectangle.style.background = random_colors[curr_color_in_block];
    colors_rectangle.style.left = width + "px";
    width -= 50;
    if (width == -50) { 
        width = 550;
        colors_block.style.background = random_colors[curr_color_in_block];
        curr_color_in_block++;
    }
    if (number_colors == curr_color_in_block) {
        curr_color_in_block = 0;
    }
    if (changing_speed < 1 && changing_speed != 0) {
        alert("Вводите верные значения!");
        changing_speed = 1000;
        document.getElementById("form2").value = 1000;
    }
    if (changing_speed < 10) {
        timeout = setTimeout(move, changing_speed);
    } else {
        timeout = setTimeout(move, changing_speed / 10);
    }
}

