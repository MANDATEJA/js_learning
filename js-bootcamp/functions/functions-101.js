// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let convertFahrenheitToCelcius = function (temp) {
    return ( (temp-32) * 5/9 )
}

let tempInCelciusOne = convertFahrenheitToCelcius(32)
let tempInCelciusTwo = convertFahrenheitToCelcius(68)

console.log(tempInCelciusOne)
console.log(tempInCelciusTwo)