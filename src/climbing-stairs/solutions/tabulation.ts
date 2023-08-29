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

const solutionOne = (n: number): number => {
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
