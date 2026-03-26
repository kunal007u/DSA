let arr = [4, 5, 343, 2]

let mergeSortalgo = (arr, left, right) => {
    if (left >= right) return //Base condition - In the end it will be only one element in the array which is sorted already 

    // Main condition 
    // Divide the arr into 2 
    let mid = Math.floor((left + right) / 2)

    mergeSortalgo(arr, left, mid)
    mergeSortalgo(arr, mid + 1, right)

    merger(arr, left, right, mid)

}

let merger = (arr, left, right, mid) => {
    let match = []
    let k = 0
    let i = left
    let j = mid + 1

    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            match[k] = arr[i]
            i++
        }
        else {
            match[k] = arr[j]
            j++
        }
        k++
    }

    while (i <= mid) {
        match.push(arr[i++])
    }

    while (j <= right) {
        match.push(arr[j++])
    }

    for (let s = 0; s < match.length; s++) {
        arr[left + s] = match[s]
    }

}
mergeSortalgo(arr, 0, arr.length - 1)

console.log(arr)