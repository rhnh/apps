"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfOddNumbers = void 0;
var utils_1 = require("./utils");
//########################################## Odd Numbers' Summation ################################
/** Sum of Odds Numbers
 * 1+3+5....
 */
// export function sumOfOddNumbers(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 0; i <= value; i++) {
//     if (oddNumber(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
/**
 *  recurssion
 * @param value number
 *

export function sumOfOddNumbers(n: number): number {
  if (n === 0) {
    return n;
  } else {
    if (n % 2 !== 0) {
      return n + sumOfOddNumbers(n - 1);
    } else {
      return sumOfOddNumbers(n - 1);
    }
  }
}
*/
var sumOfOddNumbers = function (value) {
    var res = Array.from(Array(+value).keys()).map(function (x) { return x + 1; });
    return res.reduce(function (a, c) {
        var res = !(0, utils_1.isEven)(c) ? c : 0;
        return a + res;
    });
};
exports.sumOfOddNumbers = sumOfOddNumbers;
//# sourceMappingURL=oddNumberSum.js.map