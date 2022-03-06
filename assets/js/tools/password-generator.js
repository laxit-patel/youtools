'use strict';
const resultEl = document.getElementById('result'),
    lengthEl = document.getElementById('length'),
    uppercaseEl = document.getElementById('uppercase'),
    lowercaseEl = document.getElementById('lowercase'),
    numbersEl = document.getElementById('numbers'),
    symbolsEl = document.getElementById('symbols'),
    generateEl = document.getElementById('generate'),
    clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea'),
        password = resultEl.value;

    if (!password) return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value,
        hasLower = lowercaseEl.checked,
        hasUpper = uppercaseEl.checked,
        hasNumber = numbersEl.checked,
        hasSymbol = symbolsEl.checked;

    resultEl.value = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol,
        typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
            (item) => Object.values(item)[0]
        );
    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%*&(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}