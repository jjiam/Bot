window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const word = document.getElementsByClassName('bot_listen')
const recognition = new SpeechRecognition();
const bot = window.speechSynthesis
recognition.interimResults = true;
const p = document.createElement('p')
recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    const major = new SpeechSynthesisUtterance('alexa')
    if (text === 'your name') {
        bot.speak(major)
    }
})
const button = document.getElementById('button')
button.addEventListener('click', () => {
    recognition.start()
})