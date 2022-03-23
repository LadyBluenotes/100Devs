const number = document.querySelectorAll('[data-numbers]')
const operation = document.querySelectorAll('[data-operation]')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const result = document.getElementById('result')

number.forEach(number => {
    number.addEventListener('click', () => {
        result.append(number.innerText)
    })
})

operation.forEach(operation => {
    operation.addEventListener('click', () => {
        result.append(operation.innerText)
    })
})

function append() {
    number.innerText = number.toString() + number.toString()
    operation.innerText = operation
    period.innerText = period
    if (number === '.' && number.includes('.')) return
}

clear.addEventListener('click',reset)

function reset () {
    if (buttonid = 'clear') {
        operation.innerHTML = '';
        result.innerHTML = ''
    }
}

equals.addEventListener('click',compute)

function compute () {
    result.innerText = eval(result.innerText)
}


