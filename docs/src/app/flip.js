"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
/**
 * - The aim of this challenge is to flip the number using recursion
 * - Takes a number and returns it in reverse order
 * @param {number} x
 * @returns x
 */
function flip(x) {
    var len = getLength(x);
    return flipRecursion(x, len);
}
exports.flip = flip;
var flipRecursion = function (x, len) {
    return len === 0
        ? x
        : Math.pow(10, len - 1) * (x % 10) +
            flipRecursion(Math.floor(x / 10), len - 1);
};
/**
 * Takes a number x and return the length of the number
 * @param {number} x
 * @returns {number} - length of the given number
 */
var getLength = function (x) {
    return x === 0 ? 0 : 1 + getLength(Math.floor(x / 10));
};
//# sourceMappingURL=flip.js.map