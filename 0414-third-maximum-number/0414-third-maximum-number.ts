// Approch - 1
// function thirdMax(nums: number[]): number {
//     // 1. Remove duplicates and sort descending
//     const uniqueSorted = Array.from(new Set(nums)).sort((a, b) => b - a);
    
//     // 2. Return the 3rd max if it exists, otherwise the 1st max
//     return uniqueSorted.length >= 3 ? uniqueSorted[2] : uniqueSorted[0];
// }

// Approch 2
function thirdMax(nums: number[]): number {
    // 1. Sort descending directly
    nums.sort((a, b) => b - a);

    let distinctCount = 1;
    let currentMax = nums[0];

    // 2. Loop through the array to find distinct maximums
    for (let i = 1; i < nums.length; i++) {
        // Only trigger when we find a strictly smaller number
        if (nums[i] < currentMax) {
            currentMax = nums[i];
            distinctCount++;
        }
        
        // 3. Early exit: stop exactly when we hit the 3rd distinct max
        if (distinctCount === 3) {
            return currentMax;
        }
    }

    // 4. If we finish the loop and haven't hit 3, return the absolute max
    return nums[0];
}
