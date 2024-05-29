"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToDigits = exports.memoize = exports.isPrime = exports.isEven = exports.isOdd = void 0;
//utils
function isOdd(value) {
    return isEven(value) ? false : true;
}
exports.isOdd = isOdd;
//
function isEven(value) {
    return value % 2 === 0;
}
exports.isEven = isEven;
/**
 * O(sqrt(n))
 * @param value number
 */
function isPrime(value) {
    if (value <= 1)
        return false;
    if (value <= 3)
        return true; // 2 or 3 => true
    if (value % 2 === 0 || value % 3 === 0) {
        // can be divided by 2 or 3 => false
        return false;
    }
    for (var i = 5; i * i <= value; i = i + 6) {
        //value >= 25 ?
        if (value % i === 0 || value % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
var memoize = function (fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var n = args[0];
        if (n in cache) {
            return cache[n];
        }
        else {
            var result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};
exports.memoize = memoize;
var numberToDigits = function (n) {
    var digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.trunc(n / 10);
    }
    return digits.reverse();
};
exports.numberToDigits = numberToDigits;
//# sourceMappingURL=utils.js.map