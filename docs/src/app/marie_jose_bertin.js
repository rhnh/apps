"use strict";
// Marie-Jose Bertin number / Satz 153
Object.defineProperty(exports, "__esModule", { value: true });
exports.mjbRecursion = exports.mjb = void 0;
/**
 * * The number given number X is dividable by 3
 * * The following number N is  the sum of the digits of the given number X powered by 3
 *  the given number is 15, 1^3 + 1^3 = 126,  1^3 + 2^3 + 6^3 = 225, ...
 * @param number
 * @return number[]
 */
var mjb = function (x) {
    var n = +x;
    if (mjbRecursion(n, [])[0] === 0) {
        return "The input should be dividable by 3.";
    }
    return mjbRecursion(n, []).join();
};
exports.mjb = mjb;
function mjbRecursion(x, digits) {
    var stringX = "".concat(x).split("");
    if (+x % 3 !== 0) {
        return [0];
    }
    if (x === 153) {
        digits.push(153);
        return digits;
    }
    var numberArrayX = stringX.map(function (x) { return Math.pow(+x, 3); });
    var k = numberArrayX.reduce(function (a, c) { return a + c; });
    digits.push(k);
    mjbRecursion(k, digits);
    return digits;
}
exports.mjbRecursion = mjbRecursion;
//# sourceMappingURL=marie_jose_bertin.js.map