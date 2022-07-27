/**
 * - The aim of this challenge is to flip the number using recursion
 * - Takes a number and returns it in reverse order
 * @param {number} x
 * @returns x
 */
export function flip(x: number): number {
  let len = getLength(x);
  return flipRecursion(x, len);
}

const flipRecursion = (x: number, len: number): number =>
  len === 0
    ? x
    : Math.pow(10, len - 1) * (x % 10) +
      flipRecursion(Math.floor(x / 10), len - 1);

/**
 * Takes a number x and return the length of the number
 * @param {number} x
 * @returns {number} - length of the given number
 */
const getLength = (x: number): number =>
  x === 0 ? 0 : 1 + getLength(Math.floor(x / 10));
