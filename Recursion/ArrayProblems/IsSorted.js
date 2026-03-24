// Find if the array is sorted or no using recursion 

let arr = [1, 2, 3, 4] //Sorted

let func = (arr) => {
    return helper(arr, i = 0)
}

let helper = (arr, i) => {
    if (arr[i] > arr[i + 1]) return false
    if (i === arr.length - 1) return true

    return helper(arr, i + 1)
}

console.log(func(arr))