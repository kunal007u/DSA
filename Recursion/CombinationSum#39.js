let func2 = (nums, index, current = [], arr = [], target) => {

    let sum = 0
    
    if(current.length > 1){

        for (n in current) {
            sum += current[n]
        }
    }
    console.log("🚀 ~💀 CombinationSum#39.js:4 ~💀 func2 ~💀 sum:", current);


    if(sum === target){
        arr.push(current)
        return arr
    }

    // index = index + 1

    // Base condition 
    if (sum > target  || index === nums.length) {
        // arr.push(current)
        return arr
    }

    // Main condition 
    func2(nums, index, [...current, nums[index]], arr, target) //Take it
    func2(nums, index+1, current, arr,target) //Leave it
    return arr
}


result2 = func2([2, 3, 5], 0, [], [], 8)
console.log(result2);
