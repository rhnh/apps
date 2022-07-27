export function numberOfHandShake(n: number): number {
  let sum: number = 0;
  for (let i = 0; i < +n; i++) {
    sum += i;
  }
  return sum;
}
