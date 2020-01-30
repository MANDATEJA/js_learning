let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4()
    notes.push({
        id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        saveNotes(notes)
        renderNotes(notes, filters)
    }
})

const now = moment()
now.subtract(1, 'week').subtract(20, 'days')
// November 3rd, 2003
console.log(moment().format('MMMM Do, YYYY'))
console.log(now.fromNow())

const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())