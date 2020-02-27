'use strict'

// Return existing todo from locall storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from todo array
const removeToDo = (id) => {
    const todoIndex = todos.findIndex((todo) =>todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    const summary = generateSummaryDOM(incompleteTodos)
    todoEl.appendChild(summary)

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            const p = generateTodoDOM(todo)
            todoEl.appendChild(p)
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No Todos to show'
        todoEl.appendChild(messageEl)
    }
}

// Get DOM elements for an individual item
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('dev')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        todo.completed = e.target.checked
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    // Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)

    button.addEventListener('click', () => {
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get DOM element for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}