let arr = [0, 1, 1, 1, 0, 0, 1, 1]

let i = 0;
let j = arr.length - 1;

// T: O(n) | S: O(1)
while (i <= j) {
    if (arr[i] === 0) {
        i++
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j--
    }
}

console.log(arr)

