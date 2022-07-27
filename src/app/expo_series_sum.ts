import { memoize } from "./utils";

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

const factorial = x => (x === 0 ? 1 : factorial(x - 1) * x);
const memoizedFactorial = memoize(factorial);
const expo = (x, n) => Math.pow(x, n);

export const exponentialSeries = (x, n) => {
  x = Number(x);
  n = Number(n);
  const result =
    1 +
    x +
    Array.from(Array(n - 1).keys())
      .map(n => n + 2)
      .map(n => expo(x, n) / memoizedFactorial(n))
      .reduce((a, c) => a + c);
  return result;
};
