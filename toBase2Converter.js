/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    if (decimal == 0) {
        return 0;
    }
    if (decimal > 1) {
        let remainder = decimal % 2;
        let newdecimal = decimal - remainder;
        return "" + toBase2Converter(newdecimal / 2) + remainder;
    }
    return 1;
}
module.exports = toBase2Converter;
