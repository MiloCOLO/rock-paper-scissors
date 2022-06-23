var win = 0;
var loss = 0;
var tie = 0;
var choice = ["r", "p", "s"];
var compChoice;
var userChoice; 

function winGame() {
    //compChoice = "s"
    console.log("This is where comp is " + compChoice)
    if (userChoice === "r" && compChoice === "s") {
        alert ("you've won");
        var win = win + 1;
        return
    } else if (userChoice === "p" && compChoice === "r") {
        alert ("you've won");
        var win = win + 1;
        return
    } else if (userChoice === "s" && compChoice === "p") {
        alert ("you've won");
        var win = win + 1;
        return
    }
}

function loseGame() {
    if (userChoice === "s" && compChoice === "r") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    } else if (userChoice === "r" && compChoice === "p") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    } else if (userChoice === "p" && compChoice === "s") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    }
}

function tieGame() {
    if (userChoice === compChoice) {
        alert ("TIE")
        var tie = tie + 1;
        return
    }
}

function restart() {
    var win = 0;
    var loss = 0;
    var tie = 0;
}

function playGame() {
    winGame();
    loseGame();
    tieGame();
    console.log("Wins: " + win);
    console.log("Losses: " + loss);
    console.log("Ties: " + tie);
}

function start() {
    userChoice=prompt("Please choose r, p or s");
    var compChoice =  choice[Math.floor(choice.length * Math.random())];
    if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
        console.log(userChoice);
        console.log(compChoice);
        playGame();
    }
}

start();