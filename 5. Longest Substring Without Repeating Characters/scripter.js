const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;

    const seen = {};  // stores a key value pair
    let left = 0, longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seen[currentChar]; // either undefined or a number which represents the index.

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seen[currentChar] = right;
        longest = Math.max(longest, right-left+1); // right-left+1 is the length of the substring.
    }
    return longest;
}

console.log(lengthOfLongestSubstring("abccabb"));