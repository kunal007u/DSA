// 88. Merge Sorted Array
//
// Given two sorted integer arrays `nums1` and `nums2`,
// merge them into a single sorted array in non-decreasing order.
//
// The merged result must be stored directly in `nums1`.
// `nums1` has a size of `m + n`, where:
// - The first `m` elements are valid values.
// - The last `n` elements are placeholders (0s) to hold the merged result.
//
// `nums2` contains `n` valid elements.
//
// Example 1:
// Input:
//   nums1 = [1, 2, 3, 0, 0, 0], m = 3
//   nums2 = [2, 5, 6], n = 3
//
// Output:
//   [1, 2, 2, 3, 5, 6]
//
// Explanation:
//   Merge [1, 2, 3] and [2, 5, 6] into a single sorted array.
//
// Example 2:
// Input:
//   nums1 = [1], m = 1
//   nums2 = [], n = 0
//
// Output:
//   [1]
//
// Explanation:
//   nums2 is empty, so nums1 remains unchanged.
//
// Example 3:
// Input:
//   nums1 = [0], m = 0
//   nums2 = [1], n = 1
//
// Output:
//   [1]
//
// Explanation:
//   nums1 contains no valid elements.
//   The placeholder 0 exists only to provide space for the merged result.
//
// Constraints:
// - nums1.length == m + n
// - nums2.length == n
// - 0 <= m, n <= 200
// - 1 <= m + n <= 200
// - -10^9 <= nums1[i], nums2[j] <= 10^9
//
// Approach:
// - Use three pointers:
//     i -> last valid element in nums1
//     j -> last element in nums2
//     k -> last position in nums1
// - Fill nums1 from right to left with the larger element.
// - Continue until all elements from nums2 are placed.

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

};