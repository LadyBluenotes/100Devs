//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNumbersOnly(nums){
    let onlyEvens = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            onlyEvens.push(nums[i]);
        }
    }

    // or 

    // nums.forEach(n => {
    //    if(n % 2 === 0){
    //        onlyEvens.push(n);
    //    }
    // })

    // or if using Map or Filter

    // let onlyEvens = nums.filter(function(num){
    //     return num % 2 === 0;
    // });

    // return onlyEvens;
}
