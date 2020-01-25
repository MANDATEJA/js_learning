// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function (bill, tipPercent = .2) {
    return bill + bill * tipPercent
}

let total = getTip(100, .3)
let totalTwo = getTip(120)
console.log(total)
console.log(totalTwo)

// Template string: use backtick(`) key to create a string

let name = 'Teja'
console.log(`Hey, my name is ${name}`)