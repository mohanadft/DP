import { MemoObjectType } from '../../@types/types';

/**

  NOTE: The solutions presented here are similar to Fibonacci sequence solutions but with a minor change. In the Fibonacci problem, we aimed to reach base cases 0 and 1. In this case, the base cases are always 1 because each function call represents a step. When we reach 0 or 1, we count them as individual steps. This is the primary difference between the functions below and the ones used for the Fibonacci problem.

  In the Fibonacci problem, if we encountered the base cases, we returned them as actual values, 0 and 1. Here, we always return 1 as the base case. Consequently, the resulting values here will be larger than the Fibonacci solutions due to the additional 1 added in each step.
 */

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 1
const solution = (n: number): number => {
  let m: MemoObjectType = {};
  const backtrack = (n: number) => {
    if (n <= 1) return 1;

    if (m[n]) return m[n];

    m[n] = backtrack(n - 1) + backtrack(n - 2);
    return m[n];
  };
  return backtrack(n);
};

/**
 *
 * @param {number} n
 * @param {MemoObjectType} m
 * @returns {number}
 */

// Solution 2 (Having a default hash,
// no need to declare it in scope of the function)

const solution2 = (n: number, m: MemoObjectType = {}): number => {
  if (n <= 1) return 1;

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
  if (n <= 1) return 1;

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
    if (n <= 1) return 1;

    if (m[n] !== -1) return m[n];

    m[n] = backtrack(n - 1) + backtrack(n - 2);
    return m[n];
  };
  return backtrack(n);
};
