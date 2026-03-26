let arr = [6, 5, 4, 3, 2, 1]

let func = (arr, s, e) => {
    console.log("🚀 ~💀 QuickSort.js:4 ~💀 func ~💀 arr:", arr, s, e);

    let pivot = Math.floor((s + e) / 2)
    if (s > e) {
        return
    }

    if (arr[s] > arr[pivot] && arr[e] < arr[pivot]) {
        [arr[s], arr[e]] = [arr[e], arr[s]]
        s++;
        e--;
    }

    if (arr[e] > arr[pivot]) {
        e--
    } else {
        s++
    }

    func(arr, s = 0, pivot)
    func(arr, pivot, e = arr.length - 1)

}

func(arr, s = 0, e = arr.length - 1)
console.log(arr)
