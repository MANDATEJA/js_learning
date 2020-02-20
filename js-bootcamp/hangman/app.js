const puzzleElement = document.querySelector('#puzzle')
const gameStatusElement = document.querySelector('#game-status')

const game1 = new Hangman('cat', 2)
puzzleElement.textContent = game1.puzzle
gameStatusElement.textContent = game1.gameStatus

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    gameStatusElement.textContent = game1.gameStatus
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
});


// Making an HTTP request


// const requestTwo = new XMLHttpRequest()

// requestTwo.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const countryInfo = data.find((country) => country.alpha2Code === 'IN')

//         console.log(countryInfo.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occured!')
//     }
// })

// requestTwo.open('GET', 'http://restcountries.eu/rest/v2/all')
// requestTwo.send()