// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let myFavouriteDrink = "  Sprite  ";

myFavouriteDrink = myFavouriteDrink.trim();

console.log(myFavouriteDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let thisString = "This is a string of words with apple.";

if (thisString.includes("apple") !== -1) {
    console.log("There is an apple in this string.");
} else {
    console.log("There is no apple in this string.");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function didYouWin (userChoice) {
    let botChoice = rockPaperScissors();
    if (userChoice === botChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock" && botChoice === "scissors") {
        return "You win!";
    } else if (userChoice === "scissors" && botChoice === "paper") {
        return "You win!";
    } else if (userChoice === "paper" && botChoice === "rock") {
        return "You win!";
    } else {
        return "You lose!";
    }
}   

//or 

function didYouWin (userChoice) {
    let botChoice = rockPaperScissors();
    if (userChoice === botChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && botChoice === "scissors") || (userChoice === "scissors" && botChoice === "paper") || (userChoice === "paper" && botChoice === "rock")) {
        return "You win!";
    } else {
        return "You lose!";
    }
}   

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function takeArrayOfChoices (array) {
   array.forEach( choice => didYouWin(choice));

}

takeArrayOfChoices(["rock", "paper", "scissors"]);