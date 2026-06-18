// 1. Two Sum
//
// Given an integer array `nums` and an integer `target`,
// return the indices of the two numbers whose sum equals `target`.
//
// You may assume:
// - Exactly one valid solution exists.
// - The same element cannot be used twice.
// - The answer can be returned in any order.
//
// --------------------------------------------------
// Example 1
// --------------------------------------------------
//
// Input:
//   nums = [2, 7, 11, 15]
//   target = 9
//
// Output:
//   [0, 1]
//
// Explanation:
//   nums[0] + nums[1] = 2 + 7 = 9
//
// --------------------------------------------------
// Example 2
// --------------------------------------------------
//
// Input:
//   nums = [3, 2, 4]
//   target = 6
//
// Output:
//   [1, 2]
//
// Explanation:
//   nums[1] + nums[2] = 2 + 4 = 6
//
// --------------------------------------------------
// Example 3
// --------------------------------------------------
//
// Input:
//   nums = [3, 3]
//   target = 6
//
// Output:
//   [0, 1]
//
// Explanation:
//   nums[0] + nums[1] = 3 + 3 = 6
//
// --------------------------------------------------
// Constraints
// --------------------------------------------------
//
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
//
// Exactly one valid answer exists.
//
// --------------------------------------------------
// Optimized Approach (Hash Map)
// --------------------------------------------------
//
// Idea:
// For each number, determine the value needed to reach
// the target:
//
//     complement = target - nums[i]
//
// Before storing the current number, check whether the
// complement already exists in the map.
//
// Map Structure:
//     key   -> number
//     value -> index
//
// Example:
//
// nums = [2, 7, 11, 15]
// target = 9
//
// i = 0
// complement = 7
// map = { 2 -> 0 }
//
// i = 1
// complement = 2
// map contains 2
//
// Answer:
//     [0, 1]
//
// --------------------------------------------------
// Complexity
// --------------------------------------------------
//
// Time Complexity:
//   O(n)
//
// Space Complexity:
//   O(n)
//
// --------------------------------------------------
// Key Insight
// --------------------------------------------------
//
// Instead of checking every pair:
//
//     O(n²)
//
// use a Hash Map to find the needed complement in
// constant time:
//
//     O(1)
//
// resulting in an overall:
//
//     O(n)
//
// solution.
//

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    // 2 7 11 15
    //   i

    // lookingFor :- 2, 7
    /* map {
        2: 0;
        
    }

    */
    for (let i = 0; i <= nums.length - 1; i++) {
        let lookingFor = target - nums[i];

        if (map.has(lookingFor)) {
            return [map.get(lookingFor)!, i]
        } else {
            map.set(nums[i], i)
        }
    }

    return [-1,-1]
};