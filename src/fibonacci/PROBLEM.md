# Fibonacci

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
Fibonacci sequence, such that each number is the sum of the two preceding ones
starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

[LeetCode](https://leetcode.com/problems/fibonacci-number/)

## Solutions

### Tabulation

Tabulation is a ‘bottom-up’ approach where we start from the base case and reach the final answer that we want.

### Memoization

Memoization is a top-down approach where we cache the results of function calls and return the cached result if the function is called again with the same inputs.
