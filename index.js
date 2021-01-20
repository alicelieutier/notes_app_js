const notebook = new Notebook()

const button = document.getElementById('create-button')
button.addEventListener("click", function() {
  const area = document.getElementById('note-text')
  const text = area.value
  area.value = ''

  notebook.addNote(text)
  displayNotebook()
})

function displayNotebook() {
    const noteDiv = document.getElementById('notes')
    noteDiv.innerHTML = ''
    noteDiv.appendChild(notebook.elementForDisplay())
}
