# The cost of a string

Your task is to create a string S considering lowercase English alphabets. You are given an array A of size 26 where A[i] denotes the cost of using the ith Alphabet (consider 1-based indexing). Find lexicographically the largest string S that can be created such that the cost of building the string is exactly W. For example, ‘abc’ is lexicographically smaller than ‘abcd’.

Ex:

````
Input: W = 236, a[] = {1, 1, 2, 33, 4, 6, 9, 7, 36, 32, 58, 32, 28, 904, 22, 255, 47, 69, 558, 544, 21, 36, 48, 85, 48, 58}
Output: zzzze
Explanation: 4 * (cost of z) + cost of e = 4 * 58 + 4 = 232 + 4 = 236

Input: W = 6674, a[] = {252, 288, 578, 746, 295, 884, 198, 655, 503, 868, 942, 506, 718, 498, 727, 338, 43, 768, 783, 312, 369, 712, 230, 106, 102, 554}
Output: zzzzzzzzzzzyyyyqqqq
Explanation:
11 * (cost of z) + 4 * (cost of y) + 4 * (cost of q) = 11 * 554 + 4 * 102 + 4 * 43 = 6094 + 408 + 172 = 6674```
````
