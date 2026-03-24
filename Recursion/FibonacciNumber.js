
function fibN(num) {

    if(num<2){
        return num
    }

    return fibN(num-1)+fibN(num-2)

}

console.log(fibN(4))
