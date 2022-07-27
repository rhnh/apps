import { numberToDigits } from "./utils";
/**
 * @param creditNumber - takes numeric credit number
 * @returns - returns true for valid number, and false for invalid number
 * @summary Takes number, makes an array of its digits, reverse, if index is an odd number, multiple with 2, if the result is bigger than 9, subtract the nine from it.else give the number back and add each digits
 */
export const isLuhnNumber = (creditNumber: number): boolean => numberToDigits(creditNumber)
    .reverse()
    .map((r, i) => (i % 2 !== 0 ? (r * 2 > 9 ? r * 2 - 9 : r * 2) : r))
    .reduce((a, b) => a + b) %
    10 ===
  0;


