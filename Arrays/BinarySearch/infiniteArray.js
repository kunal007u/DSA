let arr = [ 1,2,4,5,6,7,8,9,10,11,22,34,55,66,67]

const BinarySearch = (arr, start, end,target) => {
    while (arr[end]<target){
        start = end + 1
        end = start * 2
    }

    while (start<=end) {
        let mid = Math.floor((start + end) / 2)
        if (target > arr[mid]) {
            start = mid + 1
        } else if (target < arr[mid]) {
            end = mid - 1
        }else{
            return mid
        }
    }
}

start = 0;
end = 2;

let ans= BinarySearch(arr, start, end,67)
console.log(ans)