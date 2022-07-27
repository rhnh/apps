import { harmonicSeries } from "../harmonicSeries";
test("Harmonic Series", () => {
  expect(harmonicSeries(3)).toBeCloseTo(1.833333, 5);
  expect(harmonicSeries(10)).toBeCloseTo(2.9289683, 5);
  expect(harmonicSeries(1000)).toBeCloseTo(7.4854709, 5);
  expect(harmonicSeries(1000000)).toBeCloseTo(14.3927267, 5);
});
