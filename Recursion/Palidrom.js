// Need to get True if the string is palidrom or false if not using recurssion 

// For string
/*
let str = 'abccba'

let func = (str) => {
    let s = 0
    let e = str.length - 1
    return helper(str, s, e)
}

let helper = (str, s, e) => {
    if(s >= e) return true
    if (str[s] !== str[e]) return false
    
    return helper(str, ++s,--e)
}

console.log(func(str))
*/

let num = 123321


let func = (num) => {
    let digit = Math.floor(Math.log10(num)) // For 123321 the digit will be 5 
    if (num === 0) return true

    let divisor = Math.pow(10, digit) // will generate 100000
    let FirstDigit = Math.floor(num / divisor) // will do 123321/100000 which will give us first digit 1 
    let LastDigit = num % 10
    if (FirstDigit !== LastDigit) return false // Now with comparing firstdigit and last digit we can get the true and false

    // This logic is to remove the first digit from the number after tested
    let valueToRemove = FirstDigit * divisor // It's like 1 * 100000
    let removeFirstDigit = num - valueToRemove // It's like 123321 - 100000 = 23321

    num = removeFirstDigit // At this point we will assing this to the orignal num

    return func(Math.floor(num / 10)) // now will call this function again but after removing the last digit and then number will be like 2332

}



console.log(func(num))