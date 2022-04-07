//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyTheseNumbers(nums){
    let products = 1;
    for(let i = 0; i < nums.length; i++){
        products *= nums[i];
    }
    alert( products);
}

// products start at 1 so that the multiplication doesn't end up zeroing out.