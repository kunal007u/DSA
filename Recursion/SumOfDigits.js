// // It should be like 1+3+4+2 using recurssion 

// let num = 102;

// let func = (n) => {
//     if (n === 0) return 0

//     lastDigit = n % 10

//     return lastDigit + func(Math.floor(n/10))
// }

// func(num)
// console.log("🚀 ~💀 SumOfDigits.js:14 ~💀 func(num):", func(num));


let num = 38;
var addDigits = function (num) {

  


    // Main conditions
    let lastDigit = Math.floor(num %10)
    console.log("🚀 ~💀 SumOfDigits.js:25 ~💀 addDigits ~💀 lastDigit:", lastDigit);
    let remainingNumber = Math.floor(num / 10)
    console.log("🚀 ~💀 SumOfDigits.js:27 ~💀 addDigits ~💀 remainingNumber:", remainingNumber);

    let possibleAns = lastDigit + remainingNumber

    // Base condition
    if (possibleAns <= 9) return possibleAns

    return addDigits(possibleAns)
};

console.log("🚀 ~💀 SumOfDigits.js:14 ~💀 func(num):", addDigits(num));
