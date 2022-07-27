import { memoizedFactorial } from "../memoizedFactorial";
test("Factorial", () => {
  expect(memoizedFactorial(0)).toBe(1);
  expect(memoizedFactorial(1)).toBe(1);
  expect(memoizedFactorial(5)).toBe(120);
  expect(memoizedFactorial(3)).toBe(6);
  expect(memoizedFactorial(7)).toBe(5040);
  expect(memoizedFactorial(12)).toBe(479001600);
});
