/**
 *
 * @param {number} n
 * @param {number[]} heights
 * @returns {number}
 */

const fragJump1 = (n: number, heights: number[]): number => {
  if (n === 0) {
    return 0;
  }

  let jumpOne =
    fragJump1(n - 1, heights) + Math.abs(heights[n] - heights[n - 1]);
  let jumpTwo = Infinity;

  if (n > 1) {
    jumpTwo = fragJump1(n - 2, heights) + Math.abs(heights[n] - heights[n - 2]);
  }

  return Math.min(jumpOne, jumpTwo);
};

/**
 * An Optimized Solution of the above.
 *
 * @param {number} n
 * @param {number[]} heights
 * @param {number[]} dp
 * @returns {number}
 */

const fragJump2 = (
  n: number,
  heights: number[],
  dp: number[] = Array(n + 1).fill(-1)
): number => {
  if (n === 0) {
    return 0;
  }

  if (dp[n] !== -1) return dp[n];

  let jumpOne =
    fragJump2(n - 1, heights, dp) + Math.abs(heights[n] - heights[n - 1]);
  let jumpTwo = Infinity;

  if (n > 1) {
    jumpTwo =
      fragJump2(n - 2, heights, dp) + Math.abs(heights[n] - heights[n - 2]);
  }

  dp[n] = Math.min(jumpOne, jumpTwo);
  return dp[n];
};
