const validSubPalindrome = function(s, left, right) {
    while(left < right) {
        if(s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const isAlmostPalindrome = function(s) {
    let left = 0, right = s.length-1;

    while(left < right) {
        if(s[left] != s[right]) {
            return validSubPalindrome(s, left+1, right) || validSubPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
}

const hambestring = "abbccdbba"
const booler = isAlmostPalindrome(hambestring)
if (booler)
    console.log("Yes, it is almost palindrome")
else
    console.log("No, it is not almost palindrome")