var colors = generateRandomColors(6);
var reset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var msg = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var diff = 6;

colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function() {
    diff = 3;
    colors = generateRandomColors(diff);
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    msg.textContent = "";
    reset.textContent = "New Colors";
    easy.classList.add("selected");
    hard.classList.remove("selected");
})

hard.addEventListener("click", function(){
    diff = 6;
    colors = generateRandomColors(diff);
    for(var i = 0; i < squares.length; i++) {
        if(squares[i].style.display == "none") {
            squares[i].style.display = "block";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    msg.textContent = "";
    reset.textContent = "New Colors";
    easy.classList.remove("selected");
    hard.classList.add("selected");
})

reset.addEventListener("click", function() {
    colors = generateRandomColors(diff);
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    msg.textContent = "";
    reset.textContent = "New Colors";
})

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        if(this.style.backgroundColor === pickedColor) {
            msg.textContent = "Correct";
            changeColors(pickedColor);
            document.querySelector("h1").style.backgroundColor = pickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr[i] = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
    }
    return arr;
}

function random(num) {
    return Math.floor(Math.random() * num);
}