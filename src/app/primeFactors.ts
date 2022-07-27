import { isPrime } from "./utils";
/**
 *
 * @param value number
 */
export function primeFactors(value: number): string {
  value = +value;
  if (!Number(value)) return "0";
  if (isPrime(value)) {
    return `${value} is a prime number`;
  }
  let original: number = value;
  let strResult: string = "";
  while (value % 2 === 0) {
    strResult += " * " + 2;
    value /= 2;
  }
  //since value is odd or prime by now
  for (let i = 3; i * i <= value; i = i + 2) {
    while (value % i === 0) {
      strResult += " * " + i;
      value /= i;
    }
  }
  strResult = (value !== 1 ? value + "" : "") + strResult + " = " + original;
  if (
    strResult.charAt(0) === "" ||
    strResult.charAt(0) === " " ||
    strResult.charAt(0) === "*"
  )
    strResult = strResult.substr(2);
  return strResult;
}
