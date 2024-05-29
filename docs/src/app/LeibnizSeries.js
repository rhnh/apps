"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeibnizSeries = void 0;
var utils_1 = require("./utils");
//########################################## Leibniz Series's summation ###################################
/** Leibniz series' summation with loops
 * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
 */
// export function LeibnizSeries(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 1; i < 2 * value; i++) {
//     if (oddNumber(i)) {
//       sum *= -1;
//       sum += 1 / i;
//     }
//   }
//   if (sum < 0) {
//     sum *= -1;
//   }
//   return (sum *= 4);
// }
var LeibnizSeries = function (value) {
    return (Array.from(Array(+value * 2).keys())
        .filter(function (x) { return (0, utils_1.isOdd)(x); })
        .reduce(function (a, c, i) {
        var v = (0, utils_1.isEven)(i) ? 1 : -1;
        return a + v / c;
    }) * 4);
};
exports.LeibnizSeries = LeibnizSeries;
//# sourceMappingURL=LeibnizSeries.js.map