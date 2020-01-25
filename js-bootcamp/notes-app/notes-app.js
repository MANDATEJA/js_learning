const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Excercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})