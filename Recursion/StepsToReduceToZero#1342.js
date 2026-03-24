let helper = (num, count) => {
    if (num == 0) return count

    if ((num & 1 )=== 0) {

        return helper(num / 2, count + 1);
    } else {
        return helper(num - 1, count + 1)
    }
}
var numberOfSteps = function (num) {
    let count = 0

    return helper(num, count)
};

console.log(numberOfSteps(14))