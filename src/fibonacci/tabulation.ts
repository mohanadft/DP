/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @returns {number}
 */

/**
 * Solution 1 (Generators).
 * This approach `Tabulation` starts from base cases to the result. (In opposite
 * of memoization)
 */

const solution1 = (n: number): number => {
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

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @returns {number}
 */

const solution2 = (n: number): number => {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp.at(-1) as number;
};

/**
 * The most optimized solution which has a
 * TC: O(n)
 * SC: O(1)
 *
 * This solution come with wondering, why we need a whole array for computing
 * the fib of a number, while we just need two values which they are the values
 * before the number and twice before it.
 * @param {number} n
 * @returns {number}
 */

const soultion3 = (n: number): number => {
  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let res = prev1 + prev2;
    prev1 = prev2;
    prev2 = res;
  }

  return prev2;
};

soultion3(5);
