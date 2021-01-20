class CreationPage {
    constructor(notebook) {
        this.notebook = notebook
    }

    elementForDisplay() {
        const element = document.createElement('div')
        
        const textarea = document.createElement('textarea')
        textarea.cols = 30
        textarea.rows = 10
        const createButton = document.createElement('button')
        createButton.innerText = 'Create'
        const notesDiv = document.createElement('div')
        element.appendChild(textarea)
        element.appendChild(createButton)
        element.appendChild(notesDiv)


        function displayNotebook() {
            notesDiv.innerHTML = ''
            notesDiv.appendChild(notebook.elementForDisplay())
        }

        createButton.addEventListener("click", () => {
            const text = textarea.value
            textarea.value = ''
            this.notebook.addNote(text)
            displayNotebook()
        })

        return element
    }
}
