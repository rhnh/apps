import { flip } from "../flip";

test("flip", () => {
  expect(flip(1234)).toBe(4321);
  expect(flip(418223789)).toBe(987322814);
});
