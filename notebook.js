class Notebook {
    constructor() {
        this.notes = []
    }

    addNote(text) {
        const note = new Note(text)
        this.notes.push(note)
    }

    elementForDisplay() {
        const element = document.createElement('div')
        this.notes.forEach(function(note) {
            element.appendChild(note.elementForDisplay())
        });
        return element
    }
}