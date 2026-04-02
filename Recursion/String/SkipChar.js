// let str = abbcbsaa  the ans should be ans= bbcbs using recursion

let str = "abbcbsaa"

let skitStr = (str) => {

    return helper(str, i = 0, newStr = "")

}

let helper = (str, i, newStr) => {
    console.log("🚀 ~💀 RemoveStr.js:12 ~💀 helper ~💀 str:", str.length, str[i]);
    // base con
    if (i >= str.length - 1) {
        return newStr
    }

    // main
    if (str[i] === "a") {
        return helper(str, i + 1, newStr)
    } else {
        return helper(str, i + 1, newStr += str[i])
    }
}

console.log(skitStr(str))

