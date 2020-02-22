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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
    console.log(`Country: ${country.name}`)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })