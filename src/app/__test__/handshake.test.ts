import { numberOfHandShake } from "../numberOfHandShake";
test("Handshake", () => {
  expect(numberOfHandShake(10)).toBe(45);
  expect(numberOfHandShake(100)).toBe(4950);
  expect(numberOfHandShake(500)).toBe(124750);
});
