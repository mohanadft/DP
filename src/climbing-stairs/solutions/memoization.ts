import { MemoObjectType } from '../../@types/types';

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
