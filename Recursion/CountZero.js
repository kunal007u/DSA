// let's say the number is 30204 then the ans is 2

let func = (num) => {
    sum = 0

    return helper(num, sum)
}

let helper = (num, sum) => {
    let rem = num % 10
    if (num === 0) {
        return sum
    }
    if (rem === 0) sum++
    return helper(Math.floor(num / 10), sum)
}

console.log(func(302040));
