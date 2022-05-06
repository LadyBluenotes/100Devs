// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'Christmas';

favHoliday = favHoliday.toUpperCase();

console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let assignYouAString = 'I am a string';

alert(assignYouAString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

let takeInFiveNumbers = function(num1, num2, num3, num4, num5) {
    let subtractAllFive = 100 - (num1 + num2 + num3 + num4 + num5);
    alert(Math.abs(subtractAllFive));
}

takeInFiveNumbers(12, 4, 2, 13, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

let takeYourThreeNumbers = function(num1, num2, num3) {
    let lowest = Math.min(num1, num2, num3);
    let highest = Math.max(num1, num2, num3);
    console.log(lowest, highest);
}

takeYourThreeNumbers(12, 4, 2);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

let coinFlip = function() {
    let flip = Math.random();
    if (flip < 0.5) {
        return 'heads';
    } else {
        return 'tails';
    }
}

console.log(coinFlip());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

let takeThisDangNumber = function(num) {
    for (let i = 0; i <= num; i++) {
        console.log(coinFlip());
    }
}

takeThisDangNumber(10);