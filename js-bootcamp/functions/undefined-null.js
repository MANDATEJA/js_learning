// undefied for variable

let name

name = 'Teja'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
let square = function (num) {
    console.log(num)
}

// undefined for return value
let result = square()
console.log(result)

// null as assigned value
let age = 24

age = null

console.log(age)