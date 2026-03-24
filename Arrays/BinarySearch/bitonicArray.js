// arr = [0,1,2,0]

// start = 0;
// end = arr.length -1

// while(start<=end){
//     let mid = Math.floor((start+end)/2);

//     if(arr[mid + 1] > arr[mid] ){
//         start = mid + 1
//     }else{
//         end = mid -1
//     }
// }

//  console.log(start)


var findInMountainArray = function (target, mountainArr) {
    start = 0;
    end = mountainArr.length - 1


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mountainArr[mid + 1] > mountainArr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    const result = ascendingOrderBinarySearch(target, s = 0, e = start, mountainArr)

    if (result == -1) {
        return dscendingOrderBinarySearch(target, s = start + 1, e = mountainArr.length - 1, mountainArr)
    }

    return result



};

const ascendingOrderBinarySearch = (target, start, end, arr) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] > target) {
            end = mid + 1
        } else {
            start = mid + 1
        }
    }

}

const dscendingOrderBinarySearch = (target, start, end, arr) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr.get[mid] == target) {
            return mid
        } else if (arr.get[mid] > target) {
            start = mid + 1
        } else {
            end = mid + 1
        }
    }


}

findInMountainArray(2, [1, 5, 2])