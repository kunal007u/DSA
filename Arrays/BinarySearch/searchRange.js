arr = [5,7,7,7,7, 7,8,8,10]
target = 7
const BinarySearch = (arr, start, end, findingFirst)=>{
    while(start<=end){
        let mid = Math.floor((start+end)/2)
         if(target>arr[mid]){
            start = mid+1
        }else if(target < arr[mid]){
            end = mid-1
        }else{
             if (findingFirst){
                end = mid -1
             }else{
                start = mid + 1
             }
        }
    }

    return findingFirst ? start : end
}

const searchRange = (arr, target) => {
    let first = BinarySearch(arr, 0, arr.length-1, true)
    let last = BinarySearch(arr, 0, arr.length-1, false)
    console.log(first, last)
}


searchRange(arr, target)