"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWallisPI = void 0;
//########################################## John Wallis Series' Summation ################################
//PI = 2*{(2/1)*(2/3)*(4/3)*(4/5)*(6/5)*(6/7)*}
//loop
// export function JWallisPI(k: number): number {
//   let pi: number = 1;
//   let i = 1,
//     z = 1, //Zaehler
//     n = 2; //Nenner
//   while (i <= k) {
//     pi *= n / z;
//     if (i % 2 === 0) {
//       n += 2;
//     } else {
//       z += 2;
//     }
//     i++;
//   }
//   return pi * 2;
// }
var JWallisPI = function (value) {
    var z = 1, n = 2;
    var p = 1;
    Array.from(Array(+value).keys())
        .map(function (x) { return x + 1; })
        .map(function (x) {
        p *= n / z;
        if (x % 2 === 0) {
            n += 2;
        }
        else {
            z += 2;
        }
    });
    return p * 2;
};
exports.JWallisPI = JWallisPI;
//# sourceMappingURL=JWallisPI.js.map