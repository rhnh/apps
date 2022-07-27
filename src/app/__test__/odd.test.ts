import { sumOfOddNumbers } from "../oddNumberSum";
test("Sum of numbers", () => {
  expect(sumOfOddNumbers(5)).toBe(9);
  expect(sumOfOddNumbers(100)).toBe(2500);
  expect(sumOfOddNumbers(3600)).toBe(3240000);
});
