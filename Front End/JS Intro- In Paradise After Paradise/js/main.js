// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let arr = [12, 45, 23, 90, 43, 12];

function checkThemAll(arr){
  if (arr[0] < arr[arr.length - 1]) {
    alert("Hi");
  } else if (arr[0] > arr[arr.length - 1]) {
    alert("Bye");
  } else if (arr[0] === arr[arr.length - 1]) {
    alert("We close in an hour");
  }
}