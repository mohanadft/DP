import { MemoObjectType } from '../../@types/types';

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 1
const climbingStairs1 = (n: number): number => {
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

const climbingStairs2 = (n: number, m: MemoObjectType = {}): number => {
  if (n <= 1) return 1;

  if (m[n]) return m[n];

  m[n] = climbingStairs2(n - 1, m) + climbingStairs2(n - 2, m);
  return m[n];
};

/**
 *
 * @param {number} n
 * @param {number[]} m
 * @returns {number}
 */

// Solution 3 (Having a default array, no need to declare it in scope of the function)
const climbingStairs3 = (
  n: number,
  m: number[] = Array(n + 1).fill(-1)
): number => {
  if (n <= 1) return 1;

  if (m[n] != -1) return m[n];

  m[n] = climbingStairs3(n - 1, m) + climbingStairs3(n - 2, m);
  return m[n];
};

/**
 *
 * @param {number} n
 * @returns {number}
 */

// Solution 4 (Using array for memoization)
const climbingStairs4 = (n: number): number => {
  let m = Array(n + 1).fill(-1);
  const backtrack = (n: number) => {
    if (n <= 1) return 1;

    if (m[n] !== -1) return m[n];

    m[n] = backtrack(n - 1) + backtrack(n - 2);
    return m[n];
  };
  return backtrack(n);
};
