

let getPermutations = (word) => {
    //base condition 
    if (word.length <= 1) {
        return [word]
    }

    let allPerms = [];

    for (let i = 0; i < word.length; i++) {

        // 1. Pick our "Leader" for this round
        let leader = word[i]

        // 2. The "Rest" of the letters (everything EXCEPT the leader)
        // word.slice(0, i) - gets characters before position i
        // word.slice(i + 1) - gets characters after position i
        let remainingLetters = word.slice(0, i) + word.slice(i + 1);

        // 3. RECURSE: Find all permutations of the smaller bag
        let smallPer = getPermutations(remainingLetters)

        for (let perms of smallPer) {
            allPerms.push(leader + perms)
        }

    }

    return allPerms


}

let word = "abcd";
console.log(getPermutations(word))