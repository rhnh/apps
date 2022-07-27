import { JWallisPI } from "../JWallisPI";
test("John Wallis PI calculating method", () => {
  expect(JWallisPI(100)).toBeCloseTo(3.126079, 5);
  expect(JWallisPI(100000)).toBeCloseTo(3.141577, 5);
});
