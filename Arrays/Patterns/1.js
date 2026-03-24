
let r = 6
let c = 6
for (let row = 0; row < r; row++) {
    let line = ''
    for (let col = c; col > 0; col--) {
        line += "* "
    }
    c--
    console.log(line)
}