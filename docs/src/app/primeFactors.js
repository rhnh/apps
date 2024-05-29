"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFactors = void 0;
var utils_1 = require("./utils");
/**
 *
 * @param value number
 */
function primeFactors(value) {
    value = +value;
    if (!Number(value))
        return "0";
    if ((0, utils_1.isPrime)(value)) {
        return "".concat(value, " is a prime number");
    }
    var original = value;
    var strResult = "";
    while (value % 2 === 0) {
        strResult += " * " + 2;
        value /= 2;
    }
    //since value is odd or prime by now
    for (var i = 3; i * i <= value; i = i + 2) {
        while (value % i === 0) {
            strResult += " * " + i;
            value /= i;
        }
    }
    strResult = (value !== 1 ? value + "" : "") + strResult + " = " + original;
    if (strResult.charAt(0) === "" ||
        strResult.charAt(0) === " " ||
        strResult.charAt(0) === "*")
        strResult = strResult.substr(2);
    return strResult;
}
exports.primeFactors = primeFactors;
//# sourceMappingURL=primeFactors.js.map