let func = (arr) => {
    helper(arr, i = 0, count = 0)
    console.log(arr)
}

let helper = (arr, i, count) => {
    if (count > arr.length - 1) {
        return
    }
    if (i > arr.length - count - 1) {
        return helper(arr, i = 0, count + 1)
    }

    if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return helper(arr, i + 1, count)
}

func([4, 3, 2, 6, 1, 0])