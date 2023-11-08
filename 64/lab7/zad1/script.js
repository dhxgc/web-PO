var u = document.getElementById("mouse");
let dragMode = false;

onmousedown = (event) => {
    if (event.button == 0) {
        var x = document.getElementById("left");
        x.style.background = "#777";
        var u = document.getElementById("mouse");
        u.style.left = event.clientX - 80 + "px";
        u.style.top = event.clientY - 140 + "px"
        dragMode = true;
        console.log("true");
    }

    if (event.button == 1) {
        var x = document.getElementById("center");
        x.style.background = "#777";
        var u = document.getElementById("mouse");
        u.style.left = event.clientX - 80 + "px";
        u.style.top = event.clientY - 140 + "px"
    }

    if (event.button == 2) {
        var x = document.getElementById("right");
        x.style.background = "#777";
        var u = document.getElementById("mouse");
        u.style.left = event.clientX - 80 + "px";
        u.style.top = event.clientY - 140 + "px"
    }
};

onmouseup = (event) => {
    if (event.button == 0) {
        dragMode = false;
        console.log("false");
        var x = document.getElementById("left");
        x.style.background = "white";
    }
    if (event.button == 1) {
        var x2 = document.getElementById("center");
        x2.style.background = "white";
    }
    if (event.button == 2) {
        var x3 = document.getElementById("right");
        x3.style.background = "white";
    }
};

onkeydown = (event) => {
    var u = document.getElementById("mouse");
    u.style.top = "30%";
    u.style.left = "43%";
};

document.addEventListener('mousemove', function(e) {
    if (dragMode) {
        u.style.left = e.clientX - 80 + "px";
        u.style.top = e.clientY - 140 + "px";
    }
});

