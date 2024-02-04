const sentences = ["Practice makes perfect.", "Typing is a valuable skill.", "Keep calm and type on."];
let currentSentenceIndex = 0;
let startTime, endTime;

function startTyping() {
    document.getElementById("sentence").textContent = sentences[currentSentenceIndex];
    document.getElementById("user-input").value = "";
    document.getElementById("wpm").textContent = "0";
    document.getElementById("accuracy").textContent = "0%";
    startTime = new Date().getTime();
}

function resetTyping() {
    currentSentenceIndex = 0;
    startTyping();
}

function calculateResults() {
    const userInput = document.getElementById("user-input").value;
    const wordsPerMinute = calculateWordsPerMinute(userInput);
    const accuracy = calculateAccuracy(userInput, sentences[currentSentenceIndex]);

    document.getElementById("wpm").textContent = wordsPerMinute;
    document.getElementById("accuracy").textContent = accuracy + "%";

    if (currentSentenceIndex < sentences.length - 1) {
        currentSentenceIndex++;
        startTyping();
    } else {
        alert("Congratulations! You completed all sentences.");
        resetTyping();
    }
}

function calculateWordsPerMinute(userInput) {
    const endTime = new Date().getTime();
    const minutes = (endTime - startTime) / 60000;
    const words = userInput.split(' ').length;
    const wordsPerMinute = Math.round(words / minutes);
    return wordsPerMinute;
}

function calculateAccuracy(userInput, targetSentence) {
    const correctCharacters = userInput.split('').filter((char, index) => char === targetSentence[index]).length;
    const accuracy = (correctCharacters / targetSentence.length) * 100;
    return Math.round(accuracy);
}
