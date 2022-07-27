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
export const JWallisPI = (value: number): number => {
  let z = 1,
    n = 2;
  let p = 1;
  Array.from(Array(+value).keys())
    .map(x => x + 1)
    .map(x => {
      p *= n / z;
      if (x % 2 === 0) {
        n += 2;
      } else {
        z += 2;
      }
    });
  return p * 2;
};
