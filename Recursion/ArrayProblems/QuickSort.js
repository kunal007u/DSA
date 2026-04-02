let arr = [4, 2, 7, 1, 3]

let func = (arr, left, right) => {

    // base condition 
    if (left >= right) {
        return
    }

    let pivot = helper(arr, left, right)
    console.log("🚀 ~💀 QuickSort.js:12 ~💀 func ~💀 pivot:", pivot);

    func(arr, left, pivot - 1)
    func(arr, pivot, right)
}

let helper = (arr, left, right) => {

    // Grab the actual VALUE of the middle block, not just the room number!
    let pivotValue = arr[Math.floor((left + right) / 2)];

    while (left <= right) {

        while (arr[left] < pivotValue) {
            left++
        }
        while (arr[right] > pivotValue) {
            right--
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        // Take one more step inward after swapping
        left++;
        right--;
    }
    return left;
}


func(arr, 0, arr.length - 1)
console.log(arr)