import { fib } from "../fib";
describe("Fib", () => {
  test("valid", () => {
    const res = fib(7);
    expect(res).toBe(13);
  });
  test("invalid", () => {
    const res = fib(7);
    expect(res).not.toBe(27);
  });
});
