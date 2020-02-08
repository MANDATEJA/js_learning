// Primitive value: string, number, boolean, null, undefined

// Object; myObject -> Object.prototype -> null
// Array: myArray -> Array.prototype -> Object.prototype -> null
// Function: myFunc -> Function.prototype -> Object.prototype -> null
// String: myString -> String.prototype -> Object.prototype -> null
// Number: myNumber -> Number.prototype -> Object.prototype -> null
// Boolean: myBoolean -> Boolean.prototype -> Object.prototype -> null

const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
        if (!this.word.includes(guess)) {
            this.attempts--
        }
    }
}