const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getGameStatus = function () {
    if (this.status === 'playing') {
        return `Playing -> Guesses left: ${this.attempts}`
    } else if(this.status === 'failed') {
        return `Failed -> Nice try! The word was ${this.word.join('')}`
    } else  {
        return `Finished -> Great work! You guessed the word.`
    }
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (!this.attempts) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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
    if (!this.guessedLetters.includes(guess) && this.attempts) {
        this.guessedLetters.push(guess)
        if (!this.word.includes(guess)) {
            this.attempts--
        }
    }

    this.calculateStatus()
}