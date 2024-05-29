"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLuhnNumber = void 0;
var utils_1 = require("./utils");
/**
 * @param creditNumber - takes numeric credit number
 * @returns - returns true for valid number, and false for invalid number
 * @summary Takes number, makes an array of its digits, reverse, if index is an odd number, multiple with 2, if the result is bigger than 9, subtract the nine from it.else give the number back and add each digits
 */
var isLuhnNumber = function (creditNumber) { return (0, utils_1.numberToDigits)(creditNumber)
    .reverse()
    .map(function (r, i) { return (i % 2 !== 0 ? (r * 2 > 9 ? r * 2 - 9 : r * 2) : r); })
    .reduce(function (a, b) { return a + b; }) %
    10 ===
    0; };
exports.isLuhnNumber = isLuhnNumber;
//# sourceMappingURL=Luhn-CreditCard.js.map