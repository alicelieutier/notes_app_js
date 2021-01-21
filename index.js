const notebook = new Notebook(displayCurrentPage)
const creationPage = new CreationPage(notebook)
const pageDiv = document.getElementById('page')
let currentPage = 'home'
displayCurrentPage()

function displayPage(div, page) {
    div.innerHTML = ''
    div.appendChild(page.elementForDisplay())
}

function displayCurrentPage() {
    if (currentPage === 'home') {
        displayPage(pageDiv, creationPage)
    } else {
        displayPage(pageDiv, new NotePage(notebook.getNoteById(currentPage)))
    }
}

window.addEventListener('hashchange', function() {
    const pageIdRegexp = /^#([0-9]+)/
    const found = location.hash.match(pageIdRegexp)
    if (found === null) {
        currentPage = 'home'
    } else {
        currentPage = found[1]
    }
    displayCurrentPage()
}, false);

