export const LehmerRandom = (): number => {
  const t = Date.now();
  const m = 2147483647;
  const a = 7 * 7 * 7 * 7;

  return a * t % m;
}