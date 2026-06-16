/*
 * 125. Valid Palindrome

 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 */

function isNonAlphanumeric(char: string):boolean {
    return /[^a-zA-Z0-9]/.test(char);
}

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1

    while (i < j) {
        let char1 = s[i].toLowerCase();
        let char2 = s[j].toLowerCase();

        if (isNonAlphanumeric(char1)) {
            i++;
            continue;
        }
        if (isNonAlphanumeric(char2)) {
            j--
            continue;

        }

        if (char1 !== char2) {
            return false
        }

        i++;
        j--
    }

    return true
};