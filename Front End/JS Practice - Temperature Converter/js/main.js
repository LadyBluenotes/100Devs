//Write your pseduo code first! 

document.querySelector('#show').addEventListener('click', convert)

// Need the value that is in Celsius

function convert() {
    let celsius = document.querySelector('#celsius').value
    let fahrenheit = document.querySelector('#fahrenheit').value

    celsiustoFahrenheit = celsius * 9/5 + 32
    fahrenheit = (fahrenheit - 32) * 5/9 

    document.querySelector('#placeToShow').innerText = celsius
    document.querySelector('#placeToShow').innerText = fahrenheit 
}


// Convert from Celsius to Fahrenheit

// Show it