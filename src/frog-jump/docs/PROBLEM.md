# Frog Jump 🐸

There is a frog on the '1st' step of an 'N' stairs long staircase. The frog wants to reach the 'Nth' stair. 'HEIGHT[i]' is the height of the '(i+1)th' stair.If Frog jumps from 'ith' to 'jth' stair, the energy lost in the jump is given by absolute value of ( HEIGHT[i-1] - HEIGHT[j-1] ). If the Frog is on 'ith' staircase, he can jump either to '(i+1)th' stair or to '(i+2)th' stair. Your task is to find the minimum total energy used by the frog to reach from '1st' stair to 'Nth' stair.

[CodeNinja](https://www.codingninjas.com/studio/problems/frog-jump_3621012)

## Solutions

- Tabulation: A ‘bottom-up’ approach where we start from the base case and reach the final answer that we want.
- Memoization: A top-down approach where we cache the results of function calls and return the cached result if the function is called again with the same inputs and the same result.
