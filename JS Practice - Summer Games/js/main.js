//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyTheseNumbers(arr){
    let products = 1;
   arr.forEach(num => product *= num);
   alert(product);

   // OR

   // for(let i = 0; i < arr.length; i++){
    //     products *= arr[i];
    // }
    // alert(products);
}

// products start at 1 so that the multiplication doesn't end up zeroing out.