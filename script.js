const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const paraCount = document.getElementById('paraCount');
const numCount = document.getElementById('numCount');
const specialCount = document.getElementById('specialCount');

textInput.addEventListener('input', function() {
    let text = this.value.trim();

    // Word count
    let words = text.match(/\b\w+\b/g);
    wordCount.textContent = words ? words.length : 0;

    // Character count
    charCount.textContent = text.length;

    // Paragraph count
    let paragraphs = text.split(/\n\s*\n/);
    paraCount.textContent = paragraphs.length;

    // Number count
    let numbers = text.match(/\d/g);
    numCount.textContent = numbers ? numbers.length : 0;

    // Special character count (non-alphanumeric)
    let specialChars = text.match(/[^\w\s]/g);
    specialCount.textContent = specialChars ? specialChars.length : 0;
});
