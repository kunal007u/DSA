// 75. Sort Colors
//
// Given an array `nums` containing only:
//
//     0 -> Red
//     1 -> White
//     2 -> Blue
//
// Sort the array in-place so that all objects of the same
// color are grouped together in the following order:
//
//     Red -> White -> Blue
//
// which corresponds to:
//
//     0 -> 1 -> 2
//
// You must NOT use the built-in sort function.
//
// --------------------------------------------------
// Example 1
// --------------------------------------------------
//
// Input:
//   nums = [2, 0, 2, 1, 1, 0]
//
// Output:
//   [0, 0, 1, 1, 2, 2]
//
// --------------------------------------------------
// Example 2
// --------------------------------------------------
//
// Input:
//   nums = [2, 0, 1]
//
// Output:
//   [0, 1, 2]
//
// --------------------------------------------------
// Constraints
// --------------------------------------------------
//
// n == nums.length
// 1 <= n <= 300
// nums[i] ∈ {0, 1, 2}
//
// --------------------------------------------------
// Optimal Approach: Dutch National Flag Algorithm
// --------------------------------------------------
//
// Maintain three regions:
//
//     [0 ... low-1]      -> all 0s
//     [low ... mid-1]    -> all 1s
//     [mid ... high]     -> unknown
//     [high+1 ... end]   -> all 2s
//
// Pointers:
//
//     low  -> next position for 0
//     mid  -> current element
//     high -> next position for 2
//
// --------------------------------------------------
// Rules
// --------------------------------------------------
//
// nums[mid] == 0
//     Swap(nums[low], nums[mid])
//     low++
//     mid++
//
// nums[mid] == 1
//     mid++
//
// nums[mid] == 2
//     Swap(nums[mid], nums[high])
//     high--
//
// Note:
//     Do NOT increment mid after swapping with high,
//     because the incoming value has not been processed yet.
//
// --------------------------------------------------
// Example
// --------------------------------------------------
//
// nums = [2, 0, 2, 1, 1, 0]
//
// low = 0
// mid = 0
// high = 5
//
// Step 1:
//     nums[mid] = 2
//     swap(mid, high)
//
//     [0, 0, 2, 1, 1, 2]
//
// Step 2:
//     nums[mid] = 0
//     swap(low, mid)
//
//     [0, 0, 2, 1, 1, 2]
//
// Continue until:
//
//     [0, 0, 1, 1, 2, 2]
//
// --------------------------------------------------
// Complexity
// --------------------------------------------------
//
// Time Complexity:
//     O(n)
//
// Each element is processed at most once.
//
// Space Complexity:
//     O(1)
//
// Sorting is performed in-place.
//
// --------------------------------------------------
// Key Insight
// --------------------------------------------------
//
// Since there are only three possible values
// (0, 1, and 2), we can partition the array into
// three sections in a single pass using three pointers.
//
// This is known as the:
//
//     Dutch National Flag Algorithm
//
// and is the optimal solution.
//


/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let i = 0;
    let j = nums.length - 1;
    let k = 0

    // 0  0  1  1  2  2
    //       i
    //       k
    //    j

    // T(n) | S(1)
    while (k <= j) {
        if (nums[k] === 2) {
            [nums[k], nums[j]] = [nums[j], nums[k]]
            j--
        } else if (nums[k] === 0) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            i++
            k++
        } else {
            k++
        }
    }
};