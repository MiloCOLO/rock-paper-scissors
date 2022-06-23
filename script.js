var win = 0;
var loss = 0;
var tie = 0;
var choice = ["r", "p", "s"];

function winGame() {
    if (userChoice = "r" && compChoice == "s") {
        alert ("you've won");
        var win = win + 1;
        return
    } else if (userChoice = "p" && compChoice == "r") {
        alert ("you've won");
        var win = win + 1;
        return
    } else if (userChoice = "s" && compChoice == "p") {
        alert ("you've won");
        var win = win + 1;
        return
    }
}

function loseGame() {
    if (userChoice = "s" && compChoice == "r") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    } else if (userChoice = "r" && compChoice == "p") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    } else if (userChoice = "p" && compChoice == "s") {
        alert ("you've lost :(");
        var loss = loss + 1;
        return
    }
}

function tie() {
    if (userChoice === compChoice) {
        alert ("TIE")
        var tie = tie +1;
        return
    }
}

function restart() {
    var win = 0;
    var loss = 0;
    var tie = 0;
}

function start() {
    var userChoice=prompt("Please choose r, p, or s");
    if (userChoice = "r" || "p" || "s") {
        playGame();
    }
    // if (userChoice != "r" || userChoice != "p" || userChoice != "s") {
    //     alert("please pick r,p,s");
    // }

    var compChoice =  choice[Math.floor(choice.length * Math.random())];
}

function playGame() {
    winGame();
    loseGame();
    tie();

}


start();