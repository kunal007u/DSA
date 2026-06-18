// 2824. Count Pairs Whose Sum is Less Than Target
//
// Given a 0-indexed integer array `nums` and an integer `target`,
// return the number of pairs (i, j) such that:
//
//   0 <= i < j < nums.length
//
// and
//
//   nums[i] + nums[j] < target
//
// --------------------------------------------------
// Example 1
// --------------------------------------------------
//
// Input:
//   nums = [-1, 1, 2, 3, 1]
//   target = 2
//
// Output:
//   3
//
// Explanation:
//   Valid pairs:
//   - (0, 1) -> -1 + 1 = 0
//   - (0, 2) -> -1 + 2 = 1
//   - (0, 4) -> -1 + 1 = 0
//
//   Total pairs = 3
//
// --------------------------------------------------
// Example 2
// --------------------------------------------------
//
// Input:
//   nums = [-6, 2, 5, -2, -7, -1, 3]
//   target = -2
//
// Output:
//   10
//
// Explanation:
//   Valid pairs:
//   - (0, 1) -> -4
//   - (0, 3) -> -8
//   - (0, 4) -> -13
//   - (0, 5) -> -7
//   - (0, 6) -> -3
//   - (1, 4) -> -5
//   - (3, 4) -> -9
//   - (3, 5) -> -3
//   - (4, 5) -> -8
//   - (4, 6) -> -4
//
//   Total pairs = 10
//
// --------------------------------------------------
// Constraints
// --------------------------------------------------
//
// 1 <= nums.length <= 50
// -50 <= nums[i] <= 50
// -50 <= target <= 50
//
// --------------------------------------------------
// Optimized Approach (Sorting + Two Pointers)
// --------------------------------------------------
//
// 1. Sort the array.
// 2. Use two pointers:
//      i -> start of array
//      j -> end of array
//
// 3. If nums[i] + nums[j] < target:
//      - Every element between i and j forms a
//        valid pair with nums[i].
//      - Add (j - i) to the answer.
//      - Move i forward.
//
// 4. Otherwise:
//      - Sum is too large.
//      - Move j backward.
//
// Time Complexity:
//   O(n log n)    // sorting
//
// Space Complexity:
//   O(1)          // ignoring sort internals
//

function countPairs(nums: number[], target: number): number {
    let sortedNums = nums.sort((a, b) => a - b);
    let count = 0

    let i = 0;
    let j = sortedNums.length - 1;
    // 0    1   2   3  4.  5.  6
    //  -7, -6, -2, -1, 2, 3, 5
    //  i
    //                        j

    // T: O(n log n)
    // S: O(1) 
    while (i < j) {
        let sum = sortedNums[i] + sortedNums[j]
        if (sum < target) {
            count = count + (j - i)
            i++;
        } else {
            j--;
        }

    }
    return count
};