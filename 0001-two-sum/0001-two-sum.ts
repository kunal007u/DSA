function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    // 2 7 11 15
    //   i

    // lookingFor - 2, 7
    /* map {
        2: 0;
        
    }

    */
    for (let i = 0; i <= nums.length - 1; i++) {
        let lookingFor = target - nums[i];

        if (map.has(lookingFor)) {
            return [map.get(lookingFor),i]
        } else {
            map.set(nums[i], i)
        }
    }
};