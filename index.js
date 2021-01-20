const notebook = new Notebook()
const creationPage = new CreationPage(notebook)

const pageDiv = document.getElementById('page')

function displayPage(div, page) {
    div.innerHTML = ''
    div.appendChild(page.elementForDisplay())
}

displayPage(pageDiv, creationPage)
