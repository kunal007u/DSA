let arr = [3, 2,4]

for (let i = 0; i < arr.length;) {

    let correctIndex = arr[i] - 1

    if (arr[i] != arr[correctIndex]) {
        [arr[correctIndex], arr[i]] = [arr[i], arr[correctIndex]];
    } else {
        i++
    }

}

console.log(arr)