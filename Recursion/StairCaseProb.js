/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, notebook = {}) {
    if (n in notebook) {
        return notebook[n]
    }

    // Intern 
    if (n <= 0) return 0

    // Clones   
    let leftClone = climbStairs(n - 1, notebook)
    let rightClone = climbStairs(n - 2, notebook)

    notebook[n] = (leftClone + rightClone) + 1
    return notebook[n]


};

console.log(climbStairs(3))