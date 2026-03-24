let n = 10;

let isPrimeArr = new Array(n + 1).fill(true);

isPrimeArr[0] = false
isPrimeArr[1] = false

for (let i = 2; i * 2 <= n; i++) {

    if (isPrimeArr) {
        for (let j = i * 2; j <= n; j += i) {
            isPrimeArr[j] = false
        }
    }
}

for (let i = 2; i < isPrimeArr.length; i++) {
    if (isPrimeArr[i]) {
        console.log(i + " ");
    }

}