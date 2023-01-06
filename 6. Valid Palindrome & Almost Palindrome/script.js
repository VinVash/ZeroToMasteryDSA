const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Z a-z 0-9]/g, "").toLowerCase();
    console.log(s);

    let left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const hambestring = "ABABA"

const booler = isValidPalindrome(hambestring)

if(booler)
    console.log("Yes, the string is a palindrome.")
else
    console.log("No, the string is not a palindrome.")