let name = '   Teja Reddy   '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123dhfbsdj2563'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('skdfsd'))
console.log(isValidPassword('BlueMoon9@34%^'))
console.log(isValidPassword('ablc123password$%&*0nkjji'))