/**
 * ════════════════════════════════════════════════════════════════════════════
 *                   344. Reverse String [SOLVED - Easy]
 * ════════════════════════════════════════════════════════════════════════════
 *
 * PROBLEM:
 * ────────
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 * CONSTRAINT:
 * ───────────
 * ⚠️  Modify the input array IN-PLACE with O(1) extra memory.
 *
 * EXAMPLES:
 * ─────────
 * Example 1:
 *   Input:  s = ["h", "e", "l", "l", "o"]
 *   Output: ["o", "l", "l", "e", "h"]
 *
 * Example 2:
 *   Input:  s = ["H", "a", "n", "n", "a", "h"]
 *   Output: ["h", "a", "n", "n", "a", "H"]
 *
 * CONSTRAINTS:
 * ────────────
 * • 1 <= s.length <= 10⁵
 * • s[i] is a printable ASCII character
 *
 * ════════════════════════════════════════════════════════════════════════════
 */


// Using Iteration
function reverseStringIterative(s: string[]): void {
    for (let i = 0; i < s.length/2; i++) {
        // [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
        let temp = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = temp
    }

};

// Using recurssion
let reverseStringHelper = (s: string[], i: number) => {
    // base case 
    if (i >= s.length / 2) {
        return
    }
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
    reverseStringHelper(s, ++i)
}

function reverseString(s: string[]): void {
    let i = 0
    reverseStringHelper(s, i)
};