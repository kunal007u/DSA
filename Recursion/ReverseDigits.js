// n=12345 return n =54321 using recurssion

// Not Pure method
/*
let sum = 0;
let func = (num) => {
    if (num === 0) return
    last = num % 10
    sum = sum * 10 + last
    return func(Math.floor(num / 10))

}
func(1234)
console.log(sum)
*/

let func = (num) => {
    let digits = Math.floor(Math.log10(num)) //This will give me the n-1 digits of the number like for 1234 it will give me 3.3435 

    let ans = helper(num, digits)
    return pali(num, ans)
}

let pali = (num, ans) => {
    return num === ans
}



let helper = (num, digits) => {
    if (num % 10 == num) return num
    let rem = num % 10

    let ans = rem * Math.pow(10, digits) + helper(Math.floor(num / 10), digits - 1);
    return ans
}

console.log("🚀 ~💀 ReverseDigits.js:31 ~💀 func(1234):", func(123321));
