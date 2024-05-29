"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponentialSeries = void 0;
var utils_1 = require("./utils");
//########################################## Exponential Series's Summation ################################
// /** Exponential Series with loops
//  *  e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!
//  * @param x number
//  * @param n number
//  */
// export function exponentialSeries(x: number, n: number): number {
//   let result: number = 1;
//   let e: number = 1;
//   for (let i: number = 1; i <= n; i++) {
//     e *= x / i; // the numerator  x will  (constant) and  the  denominator  i  will be  incremented and multiplied
//     result += e;
//   }
//   return result;
// }
var factorial = function (x) { return (x === 0 ? 1 : factorial(x - 1) * x); };
var memoizedFactorial = (0, utils_1.memoize)(factorial);
var expo = function (x, n) { return Math.pow(x, n); };
var exponentialSeries = function (x, n) {
    x = Number(x);
    n = Number(n);
    var result = 1 +
        x +
        Array.from(Array(n - 1).keys())
            .map(function (n) { return n + 2; })
            .map(function (n) { return expo(x, n) / memoizedFactorial(n); })
            .reduce(function (a, c) { return a + c; });
    return result;
};
exports.exponentialSeries = exponentialSeries;
//# sourceMappingURL=expo_series_sum.js.map