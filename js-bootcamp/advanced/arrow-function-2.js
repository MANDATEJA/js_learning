// arguments local variable only exists in regular functions, they are not available in arrow functions
const add = function (a, b) {
    return arguments[0] + arguments [1]
}

console.log(add(11,22,33,44))