let func = (arr) => {
    helper(arr, i = 0, max = 0, count = 0)
    console.log(arr)
}

let helper = (arr, i, max, count) => {

    if (count > arr.length - 1) {
        return
    }

    if (i > arr.length - count - 1) {
        [arr[max], arr[arr.length - count - 1]] = [arr[arr.length - count - 1], arr[max]];
        return helper(arr, i = 0, max = 0, count + 1)
    }


    if (arr[i] > arr[max]) {
        return helper(arr, i + 1, max = i, count)
    }


    return helper(arr, i + 1, max, count)




}

func([4, 3, 2, 6, 1, 0])