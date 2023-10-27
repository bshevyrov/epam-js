'use strict';

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    let turnCount = 0;
    let arrStart = "A";
    let arrFinish = "C";
    let arrTemp = "B";

    function moveDisk(disks, arrStart, arrFinish, arrTemp) {
        if (disks > 0) {
            moveDisk(disks - 1, arrStart, arrTemp, arrFinish);
            turnCount++;
            moveDisk(disks - 1, arrTemp, arrFinish, arrStart);
        }
    }
    moveDisk(disks, arrStart, arrFinish, arrTemp);
    return turnCount;
}
module.exports = towerHanoi;
