// Note class -> store note, process it, return a display element
// interface -> anything that touches the page | listeners | appending to the page
let notes = []  // stores not objects

let button = document.getElementById('create-button')
button.addEventListener("click", function() {
  let area = document.getElementById('note-text')
  let text = area.value
  let note = new Note(text)
  area.value = ''
  notes.push(note)
  displayNotes()
})

function displayNotes() {
    let noteDiv = document.getElementById('notes')
    noteDiv.innerHTML = ''
    notes.forEach(function(note) {
        noteDiv.appendChild(note.elementForDisplay())
    });
}


