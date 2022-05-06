//Arrays
//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ['Power Rangers', 'Riverdale', 'The Flash', 'The Simpsons'];

tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArrayOfNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(evenArrayOfNumbers(arrayOfNumbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumOfSecondLowestAndSecondHighest(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    alert(sortedArray[1] + sortedArray[sortedArray.length - 2]);
}
