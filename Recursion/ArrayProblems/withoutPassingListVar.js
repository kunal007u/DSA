// THe problem is we need to do linear search usning recursion but you need to create list = [] variable in the function it self 

let func = (arr) => {
    // We can not make a list variable over here and pass it tot the helper funciton that's the challange

    target = 4
    return helper(arr, target, i = 0)
}

// we can not make a list variable in parameter too
let helper = (arr, target, i) => {
    let arrList = []
    if (i > arr.length - 1) {
        return arrList
    }

    if (arr[i] === target) {
        arrList.push(i)
    }

    let andFromBelpw = helper(arr, target, i + 1);
    console.log("🚀 ~💀 withoutPassingListVar.js:22 ~💀 helper ~💀 andFromBelpw:", andFromBelpw);
    arrList = [...arrList, ...andFromBelpw]
    return arrList

}

console.log(func([1, 2, 4, 4, 6]))  // It shoud return [2,3]