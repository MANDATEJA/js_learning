// const myAge = 25
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 24
const showPage = () => {
    console.log('showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Bob', 'Dylan', 'Russel', 'James', 'Carter']
team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team')