/*
    ****
    ***
    **
    *

 */


let func = (row, col) => {
    helper(row, col, r = "")
}

let helper = (row, col, r) => {
    if (row === 0) return ""

    if (col > 0) {
        r += "*"
        return helper(row, col - 1, r)
    } else {
        console.log(r)
        // console.log("\n")
        return helper(row - 1, row - 1, r = "")
    }


}
func(4, 4)