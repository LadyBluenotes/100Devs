//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arrayOfNumbers =[42, 3, -1, 12, -9, 0];

let sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareThemAll (arr) {
    let squared = [];
    for (let i = 0; i < arr.length; i++){
        squared.push(arr[i] * arr[i]);
    }
    return squared;
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
}


//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    if (str === reversed) {
        return true;
    } else {
    return false;
    }
}
