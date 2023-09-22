/**
 *
 * @param {number[]} arr
 * @param {number} w
 * @returns
 */

const solution = (arr: number[], w: number) => {
  let maxStr = '';

  const dp = (i: number, w: number, s: string[]): boolean => {
    if (i < 0 || w < 0) return false;

    if (w == 0) {
      return true;
    }

    s.push(String.fromCharCode(i + 97));

    if (dp(i, w - arr[i], s)) {
      let str = s.join('');
      if (str > maxStr) maxStr = str;

      return true;
    }

    s.pop();

    return dp(i - 1, w, s);
  };

  dp(arr.length - 1, w, []);
  return maxStr;
};
