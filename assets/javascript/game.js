var List = ["blue", "green", "pink", "yellow", "white"];

var ranWord = "";

var ranWordLetters = [];

var numLetters = 0;

var lettersChosen = [];

var wrongAnswer = [];

var win = 0;
var loss = 1;
var guess = 9;

function start() {
    guess = 9;
    lettersChosen = [];
    wrongAnswer = [];

    ranWord = List[Math.floor(Math.random() * List.length)];
    ranWordLetters = ranWord.split("");
    numLetters = ranWordLetters.length;
    console.log(ranWord);
    console.log(numLetters);

    for (var i = 0; i < numLetters; i++) {
        lettersChosen.push("_");
    }

    document.getElementById('blank').innerHTML = lettersChosen.join(" ");
    document.getElementById('guesses').innerHTML = guess;
    document.getElementById('wrongLetter').innerHTML = wrongAnswer.join(" ");

};

function checkLetters(letter) {

    var Word = false;

    for (var i = 0; i < numLetters; i++) {
        if (ranWord[i] === letter) {
            Word = true;

        }
    }

    if (Word) {
        for (i = 0; i < numLetters; i++) {
            if (ranWord[i] === letter) {
                lettersChosen[i] = letter;
            }

        }

    } else {
        guess--;
        wrongAnswer.push(letter);
    }

};


function gameOver() {

    document.getElementById('blank').innerHTML = lettersChosen.join(" ");
    document.getElementById('guesses').innerHTML = guess;
    document.getElementById('wrongLetter').innerHTML = wrongAnswer.join(" ");




    if (ranWordLetters.join(" ") === lettersChosen.join(" ")) {
        win++;
        alert("You Won The Game!");
        document.getElementById('win').innerHTML = win;
        start();

    } else if (guess === 0) {
        document.getElementById('losses').innerHTML = loss++;
        document.getElementById('wrongLetter').innerHTML = " ";
        alert("You ran out of Guesses");
        // playButton.style.visibility = "visible";
    }

    if (guess < 0) {
        guess = guess + 11;
    }

};
start();

document.onkeyup = function () {




    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);
    gameOver();

};

var reloadPage = function () {
    start();
}