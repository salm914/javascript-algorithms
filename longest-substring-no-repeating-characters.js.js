/**
 * Problem: Longest Substring Without Repeating Characters
 *
 * Approach:
 * Sliding Window + Hash Set
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m))
 *   - n = length of the input string
 *   - m = size of the character set
 *
 * Description:
 * Finds the length of the longest substring containing
 * only unique characters.
 */

function lengthOfLongestSubstring(str) {
    const uniqueCharacters = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (uniqueCharacters.has(str[right])) {
            uniqueCharacters.delete(str[left]);
            left++;
        }

        uniqueCharacters.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}