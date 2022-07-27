import { isPrime } from "../utils";
test("isPrime", () => {
  expect(isPrime(6)).toBeFalsy();
  expect(isPrime(16)).toBeFalsy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(7)).toBeTruthy();
});
