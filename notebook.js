class Notebook {
    constructor(rerender) {
        this.notes = {}
        this.idCounter = 0
        this.rerender = rerender

        const storedNotes = localStorage.getItem('notebook')
        if (storedNotes != null) {
            const notes = JSON.parse(storedNotes)
            Object.entries(notes).forEach(([id, text]) => {
                this.addNote(text, parseInt(id))
            });
        }
    }

    addNote(text, id = null) {
        const noteId = id === null ? this.idCounter : id
        const note = new Note(text, noteId, this.rerender)
        this.notes[noteId] = note
        this.idCounter = noteId + 1
        localStorage.setItem('notebook', JSON.stringify(this.notes))
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