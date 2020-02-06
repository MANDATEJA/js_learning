const Hangman = function (word, attempts) {
    this.word = word
    this.attempts = attempts
}

const game1 = new Hangman('car', 2)
console.log(game1)

const game2 = new Hangman('united states', 5)
console.log(game2)