const sentences = [
    "Practice makes perfect.",
    "Typing is a valuable skill.",
    "Keep calm and type on.",
    "The quick brown fox jumps over the lazy dog.",
    "Coding is the language of the future.",
    "Effort only fully releases its reward after a person refuses to quit.",
    // Add more sentences as needed
];

let currentSentenceIndex = 0;
let startTime, endTime;

function startTyping() {
    document.getElementById("sentence").textContent = sentences[currentSentenceIndex];
    document.getElementById("user-input").value = "";
    document.getElementById("wpm").textContent = "0";
    document.getElementById("accuracy").textContent = "0%";
    document.getElementById("feedback").textContent = "";
    startTime = new Date().getTime();
}

function resetTyping() {
    currentSentenceIndex = 0;
    startTyping();
}

function calculateResults() {
    const userInput = document.getElementById("user-input").value.trim();
    
    if (!userInput) {
        document.getElementById("feedback").textContent = "Please type something before submitting.";
        return;
    }

    const wordsPerMinute = calculateWordsPerMinute(userInput);
    const accuracy = calculateAccuracy(userInput, sentences[currentSentenceIndex]);

    document.getElementById("wpm").textContent = wordsPerMinute;
    document.getElementById("accuracy").textContent = accuracy + "%";

    if (accuracy < 80) {
        document.getElementById("feedback").textContent = "Practice more for better accuracy!";
    } else {
        document.getElementById("feedback").textContent = "Well done!";
    }

    if (currentSentenceIndex < sentences.length - 1) {
        currentSentenceIndex++;
        startTyping();
    } else {
        alert("Congratulations! You completed all sentences.");
        resetTyping();
    }
}

function calculateWordsPerMinute(userInput) {
    endTime = new Date().getTime();
    const minutes = (endTime - startTime) / 60000;
    const words = userInput.split(' ').length;
    return Math.round(words / minutes);
}

function calculateAccuracy(userInput, targetSentence) {
    const correctCharacters = userInput.split('').filter((char, index) => char === targetSentence[index]).length;
    return Math.round((correctCharacters / targetSentence.length) * 100);
}
