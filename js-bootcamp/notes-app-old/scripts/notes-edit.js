'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEdited = document.querySelector('#last-edited')
const noteId= location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastEdited.textContent = genarateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = genarateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = genarateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEdited.textContent = genarateLastEdited(note.updatedAt)
    }
})