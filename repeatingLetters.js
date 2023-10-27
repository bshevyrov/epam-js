'use strict';

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLetters(string) {
    let result = "";
    let stringArr = string.split("");

    function findSingle(string) {
        let ignoredLetters = new Set();
        for (let x = 0; x < stringArr.length; x++) {
            let copy = false;
            for (let y = x + 1; y < string.length; y++) {
                if (stringArr[x] == stringArr[y]
                    || ignoredLetters.has(stringArr[x])) {
                    copy = true;
                    break;
                }
            }
            if (copy) {
                ignoredLetters.add(stringArr[x]);
            }
        }
        return ignoredLetters;
    }

    let ignoredLetters = findSingle(string);
    stringArr.forEach(element => {
        result += element;
        if (!ignoredLetters.has(element)) {
            result += element;
        }
    });
    return result;
}

module.exports = repeatingLetters;
