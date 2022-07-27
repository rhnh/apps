import { numberToDigits } from "../utils";

describe('utils', () => {
  test("numberToDigits", () => {
    const rr = numberToDigits(1234).reverse();
    const res = rr;
    expect(numberToDigits(1234)).toEqual([1, 2, 3, 4])
    expect(res).toEqual([4, 3, 2, 1])
  });
})