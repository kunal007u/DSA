let str = "112"


let current = [""]

for (let i = 0; i < str.length; i++) {

    let snapShort = current.length
    for (let j = 0; j < snapShort; j++) {
        current.push(current[j] + str[i])
    }
}

console.log(current);