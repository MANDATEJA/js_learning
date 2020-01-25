// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block
// Variable shadowing - Variable with same name in local scope shadows variable in parent/ancertor scope

// Leaked Global - When we assign a value to a variable and that variable was never ecplicitly defined
// Ex: name = 'teja'

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

console.log(varTwo)