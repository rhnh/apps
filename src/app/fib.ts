import { memoize } from "./utils";
export const fib = memoize((n: number): number =>
  n <= 1 ? n : fib(n - 2) + fib(n - 1)
);
