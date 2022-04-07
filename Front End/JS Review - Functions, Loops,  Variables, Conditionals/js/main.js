// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favouriteFood = "pizza";

favouriteFood = "ice cream";

alert(favouriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let declareItWell = 'Hello World';

let splitString = declareItWell.split(' ');

let wordTwo = splitString[1]

alert(wordTwo)


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takeThree(num1, num2, num3){
    return (num1 / num2) * num3
}

alert(takeThree(10, 5, 2))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takeOne(num){
    console.log(Math.cbrt(num))
}

takeOne(125)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function takeTheMonth(month){
    let monthLower = month.toLowerCase();
    if (monthLower === "june" || monthLower === "july" || monthLower === "august"){
        alert("YAY")
    } else {
        alert("Booo")
    }
}

console.log(takeTheMonth("July"))

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function takeInNumber(num){
    for (let i = 1; i <= num; i++){
        if (i % 5 === 0){
            continue;
        }
        console.log(i)
    }
}

takeInNumber(10)