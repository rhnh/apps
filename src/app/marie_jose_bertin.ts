// Marie-Jose Bertin number / Satz 153

/**
 * * The number given number X is dividable by 3
 * * The following number N is  the sum of the digits of the given number X powered by 3
 *  the given number is 15, 1^3 + 1^3 = 126,  1^3 + 2^3 + 6^3 = 225, ...
 * @param number
 * @return number[]
 */
export const mjb = (x: number): string => {
  let n = +x;

  if (mjbRecursion(n, [])[0] === 0) {
    return "The input should be dividable by 3.";
  }
  return mjbRecursion(n, []).join();
};
export function mjbRecursion(x: number, digits: any): number[] {
  let stringX = `${x}`.split("");
  if (+x % 3 !== 0) {
    return [0];
  }
  if (x === 153) {
    digits.push(153);
    return digits;
  }
  let numberArrayX: number[] = stringX.map(x => Math.pow(+x, 3));
  let k: number = numberArrayX.reduce((a, c) => a + c);
  digits.push(k);
  mjbRecursion(k, digits);
  return digits;
}
