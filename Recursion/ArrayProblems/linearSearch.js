// Find an element using linear search but with recurssion 

let arr = [1, 2, 3, 4, 4]

let func = (arr) => {
    let arrlist = []
    helper(arr, target = 4, i = 0, arrlist)
    return arrlist
}

let helper = (arr, target, i, arrlist) => {
    if (i > arr.length - 1) return -1

    if (arr[i] === target) arrlist.push(i)

    return helper(arr, target, i + 1, arrlist)
}

console.log(func(arr))