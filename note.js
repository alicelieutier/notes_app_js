class Note {
    constructor(text) {
        this.text = text
    }

    elementForDisplay() {
        const textElement = document.createElement('p')
        textElement.textContent = this.text.substring(0, 20)
        return textElement
    }
}
