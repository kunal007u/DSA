
/**
 * ════════════════════════════════════════════════════════════════════════════
 *              680. Valid Palindrome II [SOLVED - Easy]
 * ════════════════════════════════════════════════════════════════════════════
 *
 * PROBLEM:
 * ────────
 * Given a string s, return true if the string can be a palindrome after
 * deleting at most one character from it.
 *
 * EXAMPLES:
 * ─────────
 * Example 1:
 *   Input:  s = "aba"
 *   Output: true
 *
 * Example 2:
 *   Input:  s = "abca"
 *   Output: true
 *   Explanation: You could delete the character 'c'.
 *
 * Example 3:
 *   Input:  s = "abc"
 *   Output: false
 *
 * CONSTRAINTS:
 * ────────────
 * • 1 <= s.length <= 10⁵
 * • s consists of lowercase English letters
 *
 * ════════════════════════════════════════════════════════════════════════════
 */


function validPalindromeHelper(i:number, j:number, s:string) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }

        i++;
        j--
    }

    return true
}

function validPalindrome(s: string): boolean {
    //cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu
    //  i
    //                                                             j

    let i = 0;
    let j = s.length - 1

    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--
            continue;
        }

        else {
            return validPalindromeHelper(i + 1, j, s) || validPalindromeHelper(i, j - 1, s)
        }

    }

    return true
};