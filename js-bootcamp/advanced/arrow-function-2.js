// arguments local variable only exists in regular functions, they are not available in arrow functions
const add = function (a, b) {
    return arguments[0] + arguments [1]
}

console.log(add(11,22,33,44))

// this local variable is not accessible in arrow functions
const car = {
    color: 'red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())