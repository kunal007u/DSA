let arr = [-1,5,4,3,2,1,6,43,55,22,0];


for (let i = 0; i < arr.length; i++) {
    let max = arr[0];
    let maxIndex=0;
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > max) {
            max = arr[j]
            maxIndex = j
        }
    }

    let temp = arr[maxIndex]
    arr[maxIndex] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp

}

console.log(arr)