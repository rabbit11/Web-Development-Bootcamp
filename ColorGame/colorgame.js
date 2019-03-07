var squares = document.querySelectorAll(".square");
var goalDisplay = document.querySelector("#goalColor");
var messageDisplay = document.querySelector("#messageDisplay");
var jumbotron = document.querySelector(".jumbotron");
var newColors = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".modeButton");
var win = false;
var difficulty = 6;
var colors = [];

//setting the game up for the first time
init();

function init(){
    reset();

    //click event for each square
    setUpSquares();
    
    //click event for new colors button
    newColors.addEventListener("click", reset);

    //mode switches event listeners
    setUpModeButtons();
}

//--------------------------- FUNCTIONS -------------------------------
function pickArr(){
    var randomArr = Math.floor(Math.random() * colors.length); 
    return colors[randomArr];
}

function generateColorsArray(num){
    var array = [];

    for(var i = 0; i < num; i++){
        array.push(randomColor());
    }
    return array;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    //rgb(255, 255, 255)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//resets all the squares and jumbotrons features
function reset(){
    //reseting all the 6 squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "#232323";
    }

    colors = generateColorsArray(difficulty);
    colorPicked = pickArr();
    goalDisplay.textContent = colorPicked;

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    newColors.textContent = "New Colors";
    messageDisplay.textContent = "";
    jumbotron.style.backgroundColor = "#e9ecef";
}

function setUpSquares(){
    for (var i = 0; i < colors.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor == colorPicked) {
                win = true;
                for (var j = 0; j < colors.length; j++) {
                    squares[j].style.backgroundColor = colorPicked;
                    jumbotron.style.backgroundColor = colorPicked;
                    messageDisplay.textContent = "YOU WIN!!!";
                    newColors.textContent = "PLAY AGAIN?";
                }
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            //reseting the buttons background color
            for (var j = 0; j < modeButtons.length; j++) {
                modeButtons[j].classList.remove("selected");
            }
            //setting a background color to selected button
            this.classList.add("selected");

            this.textContent == "EASY" ? difficulty = 3 : difficulty = 6;

            reset();
        });
    }
}