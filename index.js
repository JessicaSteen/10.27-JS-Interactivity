console.log('hello world');
let message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = (inputField.value)
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let dltBtn = document.createElement('button')
    dltBtn.textContent = ("x")
    dltBtn.addEventListener('click', deleteMovie)
    movie.appendChild(dltBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ('')
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Moive Watched' 
    } else {
        message.textContent = "Moive Added Back"
    }
}