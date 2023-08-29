# Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

[LeetCode](https://leetcode.com/problems/climbing-stairs/)

## Solutions

* Tabulation: A ‘bottom-up’ approach where we start from the base case and reach the final answer that we want.
* Memoization: A top-down approach where we cache the results of function calls and return the cached result if the function is called again with the same inputs.

## NOTE 📔

The solutions presented here are similar to Fibonacci sequence solutions but with a minor change. In the Fibonacci problem, we aimed to reach base cases 0 and 1. In this case, the base cases are always 1 because each function call represents a step. When we reach 0 or 1, we count them as individual steps. This is the primary difference between the functions below and the ones used for the Fibonacci problem.

In the Fibonacci problem, if we encountered the base cases, we returned them as actual values, 0 and 1. Here, we always return 1 as the base case. Consequently, the resulting values here will be larger than the Fibonacci solutions due to the additional 1 added in each step.
