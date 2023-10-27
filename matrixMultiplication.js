'use strict';

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    let arrResult = [matrix1.length];
    for (let k = 0; k < matrix1.length; k++) {
        arrResult[k] = [matrix1.length];
    }
    for (let x = 0; x < matrix1.length; x++) {
        for (let y = 0; y < matrix2.length; y++) {
            arrResult[x][y] = 0;
            for (let z = 0; z < matrix2.length; z++) {
                arrResult[x][y] += matrix1[x][z] * matrix2[z][y];
            }
        }
    }
    return arrResult;
}
module.exports = matrixMultiplication;
