/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding ones
 * starting from 0 and 1. That is,
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 */

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 1
const solution = (n: number): number => {
  let m: { [key: string]: number } = {};
  const backtrack = (n: number) => {
    if (n <= 1) return n;

    if (m[n]) return m[n];

    m[n] = backtrack(n - 1) + backtrack(n - 2);
    return m[n];
  };
  return backtrack(n);
};

/**
 *
 * @param {number} n
 * @param {[key: string]: number} m
 * @returns {number}
 */

// Solution 2 (Having a default hash,
// no need to declare it in scope of the function)

const solution2 = (n: number, m: { [key: string]: number } = {}): number => {
  if (n <= 1) return n;

  if (m[n]) return m[n];

  m[n] = solution2(n - 1, m) + solution2(n - 2, m);
  return m[n];
};

/**
 *
 * @param {number} n
 * @param {number[]} m
 * @returns {number}
 */

// Solution 3 (Having a default array, no need to declare it in scope of the function)
const solution3 = (n: number, m: number[] = Array(n + 1).fill(-1)): number => {
  if (n <= 1) return n;

  if (m[n] != -1) return m[n];

  m[n] = solution3(n - 1, m) + solution3(n - 2, m);
  return m[n];
};

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 4 (Using array for memoization)
const solution4 = (n: number): number => {
  let m = Array(n + 1).fill(-1);
  const backtrack = (n: number) => {
    if (n <= 1) return n;

    if (m[n] !== -1) return m[n];

    m[n] = backtrack(n - 1) + backtrack(n - 2);
    return m[n];
  };
  return backtrack(n);
};

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 5 (Generators).
// This approach `Tabulation` starts from base cases to the result. (In opposite of memoization)
const solution5 = (n: number): number => {
  function* fibGenerator() {
    let arr = [0, 1];

    yield arr[0];
    yield arr[1];

    while (true) {
      let next = arr.at(-1)! + arr.at(-2)!;
      arr.push(next);
      yield next;
    }
  }

  let gen = fibGenerator();

  for (let i = 0; i < n; i++) {
    gen.next();
  }

  return gen.next().value as number;
};

console.log(solution(3));
