let arr = [1,2,5,9,7]

let start= 0;
let end = arr.length;
let a = [];

while(start<=end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--

    return arr
}

console.log(arr)