"use strict";
const abc_length = 26,
    all_characters = {
        uppercase: Array.from({ length: abc_length }, (e, i) => String.fromCharCode(i + 65)),
        lowercase: Array.from({ length: abc_length }, (e, i) => String.fromCharCode(i + 97)),
        numbers: [...Array(10).keys()].toString().split(",")
    };

let characters = [];

function GeneratePassword() {
    let str = "";
    const length = +range_num.value;
    for (let i = 0; i < length; i++) {
        str += characters[Math.floor(Math.random() * characters.length)];
    }
    output.innerHTML = str;
}

function CheckBoxOnClick() {
    var _a;
    const checked_inputs = include.querySelectorAll("input[type=checkbox]:checked");
    if (!checked_inputs.length) {
        (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    } else {
        characters.length = 0;
        const checked = [...checked_inputs].map(({ value }) => value);
        for (let i of checked) {
            if (all_characters.hasOwnProperty(i)) {
                characters = characters.concat(all_characters[i]);
            }
        }
    }
}

function CopyPassword() {
    var _a, _b, _c;
    const range = document.createRange();
    range.selectNode(output);
    (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.addRange(range);
    document.execCommand("copy");
    (_c = window.getSelection()) === null || _c === void 0 ? void 0 : _c.removeAllRanges();
}
CheckBoxOnClick();
GeneratePassword();