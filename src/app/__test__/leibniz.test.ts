import { LeibnizSeries } from "../LeibnizSeries";
test("Leibniz Series", () => {
  expect(LeibnizSeries(3)).toBeCloseTo(3.466667, 5);
  expect(LeibnizSeries(100)).toBeCloseTo(3.1315929, 5);
  expect(LeibnizSeries(1000)).toBeCloseTo(3.1405927, 5);
  expect(LeibnizSeries(100000)).toBeCloseTo(3.1415827, 5);
});
