'use strict';

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */

function substringOccurrencesCounter(substring, text) {
    let result = 0;
    text = text.toLowerCase();
    substring = substring.toLowerCase();
    while (text.length >= substring.length) {
        let tmp = text.indexOf(substring);
        if (tmp == -1) {
            break;
        }
        result += 1;
        let spaceIndex = text.indexOf(" ");
        if (spaceIndex == -1) {
            break;
        }
        text = text.substring(spaceIndex + 1);
    }
    return result;
}
module.exports = substringOccurrencesCounter;
