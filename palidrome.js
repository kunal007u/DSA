let a = "abccb"

let arr=a.toLowerCase()
let ans = true

for (let i = 0; i < arr.length/2; i++) {
    if (arr[i] !== arr[arr.length-i-1]){
        ans = false
    }
    
}

console.log(ans)