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
