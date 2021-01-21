class Notebook {
    constructor(rerender) {
        this.notes = {}
        this.idCounter = 0
        this.rerender = rerender
    }

    addNote(text) {
        const note = new Note(text, this.idCounter, this.rerender)
        this.notes[this.idCounter] = note
        this.idCounter ++
    }

    getNoteById(id) {
        return this.notes[id]
    }

    elementForDisplay() {
        const element = document.createElement('div')
        Object.entries(this.notes).forEach(function([_, note]) {
            element.appendChild(note.linkForDisplay())
        });
        return element
    }
}