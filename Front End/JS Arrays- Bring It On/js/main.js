// *Variables*
// Declare a variable, assign it a boolean, and alert the value

// let isItTrue = true 

// alert (isItTrue)

// Declare a variable, reassign it to your favorite color, and console log the value

// let myFavouriteColour = 'blue'

// myFavouriteColour = 'red'

// console.log(myFavouriteColour)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

// let giveMeTheSum = (num1, num2, num3, num4) => {return Number((num1 + num2 + num3) / num4) }

// console.log(giveMeTheSum(7, 2, 3, 4))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

// function takeTwoNumbers(num1, num2){
//     console.log(Math.pow(num1, num2))
// }

// takeTwoNumbers(2, 3)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

// function boatsAndLogs(bowl, string){
//     if (bowl){
//         alert(string)
//     }else {
//         console.log(string)
//     }
// }

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

// function takeTheNumber(num){
//     for (let i = 1; i <= num; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz')
//         }else if (i % 3 === 0){
//             console.log('fizz')
//         }else if (i % 5 === 0){
//             console.log('buzz')
//         }else {
//             console.log(i)
//         }
//         }
//     }


//     takeTheNumber(15)