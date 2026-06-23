const characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    "!", "@", "#", "$", "%", "&", "*", "?", "_", "-"
];

let logEl = document.getElementById("log")
let logEl2 = document.getElementById("log2")

let password = ""

let randomIndex = []


// FUNCTION
function getRandomPassword() {
    getPassword1()
    getPassword2()
}

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function getPassword1() {
    logEl.textContent = ""
    
    for (let i = 0; i < getValue(); i++) {
        logEl.textContent += characters[getRandomIndex()]
    }
}

function getValue() {
    let passwordLength = document.getElementById("length-el")
    return passwordLength.value
}

function getPassword2() {
    logEl2.textContent = ""
    
    for (let i = 0; i < getValue(); i++) {
        logEl2.textContent += characters[getRandomIndex()]
    }
}

function copyToClipboard1() {
    navigator.clipboard.writeText(logEl.textContent)
    alert("Copied to clipboard")
}

function copyToClipboard2() {
    navigator.clipboard.writeText(logEl2.textContent)
    alert("Copied to clipboard")
}