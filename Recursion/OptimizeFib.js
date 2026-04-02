/*
    Problem: for fib(50) it will count fib(2) '12 billion' time 
    we need to just store the value that we already calculate and will not call the recrsion but instead just returen that value 

*/

let fibOptimizd = (n, notebook = {}) => {
    // First we will check our notebook if we have that value already calculated or no 
    if (n in notebook) {
        return notebook[n]
    }

    // Interns 
    if(n === 0) return 0
    if(n === 1) return 1

    // now we will split the universe by sending out clone into left and right room
    let leftClone = fibOptimizd(n - 1, notebook)
    let rightClone = fibOptimizd(n - 2, notebook)

    notebook[n] = leftClone + rightClone

    return notebook[n]
}

console.log(fibOptimizd(3))