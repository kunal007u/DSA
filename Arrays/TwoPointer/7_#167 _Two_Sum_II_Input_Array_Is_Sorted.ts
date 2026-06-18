// 167. Two Sum II - Input Array Is Sorted
//
// Given a 1-indexed array `numbers` sorted in non-decreasing order,
// find two numbers such that:
//
//     numbers[index1] + numbers[index2] == target
//
// where:
//
//     1 <= index1 < index2 <= numbers.length
//
// Return the indices as:
//
//     [index1, index2]
//
// You may assume:
// - Exactly one valid solution exists.
// - The same element cannot be used twice.
// - Only constant extra space is allowed.
//
// --------------------------------------------------
// Example 1
// --------------------------------------------------
//
// Input:
//   numbers = [2, 7, 11, 15]
//   target = 9
//
// Output:
//   [1, 2]
//
// Explanation:
//   2 + 7 = 9
//
// --------------------------------------------------
// Example 2
// --------------------------------------------------
//
// Input:
//   numbers = [2, 3, 4]
//   target = 6
//
// Output:
//   [1, 3]
//
// Explanation:
//   2 + 4 = 6
//
// --------------------------------------------------
// Example 3
// --------------------------------------------------
//
// Input:
//   numbers = [-1, 0]
//   target = -1
//
// Output:
//   [1, 2]
//
// Explanation:
//   -1 + 0 = -1
//
// --------------------------------------------------
// Constraints
// --------------------------------------------------
//
// 2 <= numbers.length <= 3 * 10^4
// -1000 <= numbers[i] <= 1000
// -1000 <= target <= 1000
//
// numbers is sorted in non-decreasing order.
// Exactly one valid solution exists.
//
// --------------------------------------------------
// Optimal Approach: Two Pointers
// --------------------------------------------------
//
// Since the array is already sorted:
//
//     i -> left pointer
//     j -> right pointer
//
// Start:
//
//     i = 0
//     j = numbers.length - 1
//
// --------------------------------------------------
// Pointer Logic
// --------------------------------------------------
//
// sum = numbers[i] + numbers[j]
//
// Case 1:
//     sum === target
//
//     Found the answer.
//     Return [i + 1, j + 1].
//
// Case 2:
//     sum < target
//
//     Need a larger sum.
//     Move left pointer forward.
//
//     i++
//
// Case 3:
//     sum > target
//
//     Need a smaller sum.
//     Move right pointer backward.
//
//     j--
//
// --------------------------------------------------
// Why It Works
// --------------------------------------------------
//
// Because the array is sorted:
//
// If sum is too small:
//
//     numbers[i] + numbers[j] < target
//
// Moving j left would make the sum even smaller.
//
// Therefore:
//
//     i++
//
// If sum is too large:
//
//     numbers[i] + numbers[j] > target
//
// Moving i right would make the sum even larger.
//
// Therefore:
//
//     j--
//
// --------------------------------------------------
// Complexity
// --------------------------------------------------
//
// Time Complexity:
//     O(n)
//
// Each pointer moves at most n times.
//
// Space Complexity:
//     O(1)
//
// Only a few variables are used.
//
// --------------------------------------------------
// Key Insight
// --------------------------------------------------
//
// The sorted property eliminates the need for a Hash Map.
//
// Two Pointers:
//     Time  -> O(n)
//     Space -> O(1)
//
// Hash Map:
//     Time  -> O(n)
//     Space -> O(n)
//
// Therefore, the Two Pointer solution is optimal.
// 

function twoSum2(numbers: number[], target: number): number[] {

    /*
    // T: O(n)
    // S: O(n)
    // <key,value>= <nums[i], i>
    const map = new Map<number, number>();

    for (let i = 0; i <= numbers.length - 1; i++) {
        let lookingFor = target - numbers[i]
        if(map.has(lookingFor)){
            return [map.get(lookingFor), i+1]
        }else{
            map.set(numbers[i], i+1)
        }
    }
    */

    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        let sum = numbers[i] + numbers[j]

        if (sum == target) {
            return [i + 1, j + 1]
        } else if (sum < target) {
            i++
        } else {

            j--
        }
    }

    return [-1,-1]
};