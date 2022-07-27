//utils
export function isOdd(value: number): boolean {
  return isEven(value) ? false : true;
}

//
export function isEven(value: number): boolean {
  return value % 2 === 0;
}

/**
 * O(sqrt(n))
 * @param value number
 */
export function isPrime(value: number): boolean {
  if (value <= 1) return false;
  if (value <= 3) return true; // 2 or 3 => true

  if (value % 2 === 0 || value % 3 === 0) {
    // can be divided by 2 or 3 => false
    return false;
  }
  for (let i = 5; i * i <= value; i = i + 6) {
    //value >= 25 ?
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

export const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

export const numberToDigits = (n: number): number[] => {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.trunc(n / 10);
  }
  return digits.reverse();
};
