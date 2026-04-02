// Take it / Leave it Method in STRING 
let func = (str, index, current, arr = []) => {
    if (index === str.length) {
        arr.push(current)
        return arr
    }

    func(str, index + 1, current + str[index], arr) //take it
    func(str, index + 1, current, arr) // leave it 
    return arr
}

result = func("abc", 0, "", [])
result.sort((a, b) => a.length - b.length)
console.log(result);


// Take it / Leave it Method in Numbers 

let func2 = (nums, index, current=[], arr=[]) => {
    // Base condition 
    if(index === nums.length){
        arr.push(current)
        return arr
    }

    // Main condition 
    func2(nums, index+1, [...current, nums[index]], arr) //Take it
    func2(nums, index+1, current, arr) //Leave it
    return arr
}


result2 = func2([1,2,3], 0, [], [])
result2.sort((a, b) => a.length - b.length)
console.log(result2);

