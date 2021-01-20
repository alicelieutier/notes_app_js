const notes = []

const button = document.getElementById('create-button')
button.addEventListener("click", function() {
  const area = document.getElementById('note-text')
  const text = area.value
  const note = new Note(text)
  area.value = ''
  notes.push(note)
  displayNotebook()
})

function displayNotebook() {
    const noteDiv = document.getElementById('notes')
    noteDiv.innerHTML = ''
    notes.forEach(function(note) {
        noteDiv.appendChild(note.elementForDisplay())
    });
}
