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
