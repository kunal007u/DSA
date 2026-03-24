// Roteted Binary Search
let arr = [6, 7, 1, 2, 3, 4, 5]
let target = 1

let findPivot= (arr) =>{
    let start = 0;
    let end = arr.length - 1;

    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)

        if(arr[mid] > arr[mid+1]){
            start= mid + 1
        }
        if (arr[mid]<arr[mid-1]){
            end = mid -1
        }else{
            return mid 
        }
    }
}


let ascendingBS = (arr, target, start, end) => {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if (arr[mid] == target) {
            return mid
        }
        else if (target > arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }

    }
    return -1
}

let descendingBS = (arr, target, start, end) => {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if (arr[mid] == target) {
            return mid
        }
        else if (target > arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }

    }
    return -1
}

let pivot =findPivot(arr)
if (pivot !== -1) {
    const result = ascendingBS(arr, target, 0, pivot)
    if (result != -1) console.log( result)
    else  console.log(descendingBS(arr, target, pivot+1, arr.length - 1))
}

