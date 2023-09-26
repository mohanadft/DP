/**
 * TC: O(2^26)
 * SC: O(n) where n is the length of the result
 * @param {number[]} arr
 * @param {number} w
 * @returns
 */

const solution = (arr: number[], w: number) => {
  let str: string[] = [];

  const dp = (i: number, w: number): boolean => {
    if (i < 0 || w < 0) return false;

    if (w == 0) {
      return true;
    }

    str.push(String.fromCharCode(i + 97));

    if (dp(i, w - arr[i])) {
      return true;
    }

    str.pop();

    return dp(i - 1, w);
  };

  dp(arr.length - 1, w);
  return str.join('');
};
