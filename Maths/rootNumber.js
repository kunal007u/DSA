let n = 40;

let start = 0;
let end = n


while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (mid * mid === n) {
        console.log(mid)
        break;
    } else if (mid * mid > n) {
        end = mid - 1
    } else {
        start = mid + 1
    }
}

let ans = 0

for (let i = 0.1; i <= 0.9; i = i + 0.1) {

    let multi = end + i

    if ((multi * multi) < n) {
        ans = (multi * multi)
    }else{
        console.log(ans)
        break;
    }
}
