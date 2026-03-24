// It should be like 1+3+4+2 using recurssion 

let num = 102;

let func = (n) => {
    if (n === 0) return 0

    lastDigit = n % 10

    return lastDigit + func(Math.floor(n/10))
}

func(num)
console.log("🚀 ~💀 SumOfDigits.js:14 ~💀 func(num):", func(num));
