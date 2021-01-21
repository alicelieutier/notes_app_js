class NotePage {
    constructor(note) {
        this.note = note
    }

    elementForDisplay() {
        const element = document.createElement('div')
        element.appendChild(this.note.longFormForDisplay())

        const link = document.createElement('a')
        link.href = `#`
        link.textContent = 'Back'
        element.appendChild(link)

        return element
    }
}