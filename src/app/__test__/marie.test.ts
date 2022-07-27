import { mjbRecursion } from "../marie_jose_bertin";
test("MJB", () => {
  expect(mjbRecursion(35, [])).toEqual(expect.arrayContaining([]));
  expect(mjbRecursion(33, [])).toEqual(
    expect.arrayContaining([54, 189, 1242, 81, 513, 153, 153])
  );
  expect(mjbRecursion(12, [])).toEqual(
    expect.arrayContaining([9, 729, 1080, 513, 153, 153])
  );
  expect(mjbRecursion(15, [])).toEqual(
    expect.arrayContaining([
      126,
      225,
      141,
      66,
      432,
      99,
      1458,
      702,
      351,
      153,
      153
    ])
  );
  expect(mjbRecursion(123456789, [])).toEqual(
    expect.arrayContaining([2025, 141, 66, 432, 99, 1458, 702, 351, 153, 153])
  );
});
