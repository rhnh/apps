import { isEven, isOdd } from "./utils";
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

export const LeibnizSeries = (value: number): number => {
  return (
    Array.from(Array(+value * 2).keys())
      .filter(x => isOdd(x))
      .reduce((a: number, c: number, i: number) => {
        let v = isEven(i) ? 1 : -1;
        return a + v / c;
      }) * 4
  );
};
