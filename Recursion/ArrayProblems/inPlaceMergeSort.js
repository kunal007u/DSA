let arr = [5, 4, 3, 2, 1]


let mergeSort = (arr, s, e) => {
    if (e - s <= 1) return;

    let m = Math.floor((s + e) / 2) // Part arr in to 2 

    mergeSort(arr, s, m)
    mergeSort(arr, m, e)

    return merge(arr, s, m, e)

}

let merge = (arr, s, m, e) => {
    let mix = []
    let i = s
    let j = m
    let k = 0

    while (i < m && j < e) {
        if (arr[j] < arr[i]) {
            mix[k] = arr[j]
            j++
        } else {
            mix[k] = arr[i]
            i++
        }
        k++
    }

    while (i < m) {
        mix[k] = arr[i]
        i++
        k++
    }

    while (j < e) {
        mix[k] = arr[j]
        j++
        k++
    }


    for (let l = 0; l < mix.length; l++) {
        arr[s + l] = mix[l];
    }
}

mergeSort(arr, 0, arr.length);
console.log(arr); // [1, 2,