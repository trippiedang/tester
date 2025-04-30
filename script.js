document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    const parts = text.split(' ');
    let newText = '';

    parts.forEach((part, index) => {
        if (part.toLowerCase() === 'Chelsi') {
            newText += `<span class="Chelsi">${part}</span>`;
        } else {
            newText += part;
        }
        if (index < parts.length - 1) {
            newText += ' '; // 
        }
    });

    heading.innerHTML = newText;

   
    heading.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ddd';
        this.style.cursor = 'pointer';
    });

    heading.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
        this.style.cursor = 'default';
    });
});