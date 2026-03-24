const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        // asccending
        if (arr[start] <= arr[end]) {
            if (arr[mid] == target) {
                return mid
            }
            else if (target > arr[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

        // decending 
        else {
            if (arr[mid] == target) {
                return mid
            }
            else if (target < arr[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return end
}

const asccendingArray = [2, 3, 5, 9, 14, 20,21]
const decendingArray = [44, 22, 7, 5, 4, 1];

console.log(binarySearch(asccendingArray, 15))
console.log(binarySearch(decendingArray, 44))