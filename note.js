class Note {
    constructor(text, id, rerender) {
        this.id = id
        this.processedText(text, (processed) => {
            this.text = processed
            rerender()
        })
    }

    processedText(text, callback) {
        fetch('https://makers-emojify.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"text": text}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            callback(data.emojified_text)
        })
        .catch((error) => {
            console.error('Error:', error);
            callback(text)
        });
    }

    linkForDisplay() {
        const div = document.createElement('div')
        const link = document.createElement('a')
        link.href = `#${this.id}`
        link.textContent = this.text.substring(0, 20)
        div.appendChild(link)
        return div
    }

    longFormForDisplay() {
        const textElement = document.createElement('p')
        textElement.textContent = this.text
        return textElement
    }
}
