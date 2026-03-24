let arr = [1, 2, 3, 4, 5, 6, 7]
let t = 7

function BS(arr, start, end, t) {
    let mid = Math.floor(start + (end - start) / 2);

    if(start>end){
        return -1
    }

    if (arr[mid] === t) {
        return mid
    }

    if (arr[mid] < t) {
        return BS(arr, mid + 1, end, t)
    } else  {
        return BS(arr, start, mid - 1, t)
    }

}

console.log(BS(arr, 0, arr.length - 1, t))