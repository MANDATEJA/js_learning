const Hangman = function (word, attempts, guessedWord) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedWord = guessedWord.toLowerCase().split('')
}

Hangman.prototype.getPuzzle = function () {
    let guessedWord = ''
    this.word.forEach((letter) => {
        const index = this.word.indexOf(letter)
        if (this.word[index] === this.guessedWord[index]) {
            guessedWord += letter
        } else {
            guessedWord += '*'
        }
    })

    if (guessedWord.includes('*')) {
        return `No guesses? -> ${guessedWord}`
    } else {
        return `Your guess is correct -> ${guessedWord}`
    }
}

const game1 = new Hangman('car', 2, 'car')
console.log(game1.getPuzzle())

const game2 = new Hangman('united states', 5, 'unibar foobar')
console.log(game2.getPuzzle())