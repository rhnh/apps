import { memoize } from "./utils";
export const factorial = (num: number): number =>
  num < 2 ? 1 : +num * factorial(+num - 1);

export const memoizedFactorial = memoize(factorial);
