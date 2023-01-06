#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

bool validSubPalindrome(string s, int left, int right) {
    while(left < right) {
        if(s[left] != s[right])
            return false;

        left++;
        right--;
    }

    return true;
}

bool isAlmostPalindrome(string s) {
    int left = 0, right = s.size()-1;

    while(left < right) {
        if(s[left] < s[right]) {
            return validSubPalindrome(s, left+1, right) || validSubPalindrome(s, left, right-1);
        }
        left++;
        right++;
    }
    return true;
}

int main () {
    cout << "Enter the string: " << endl;
    string s; cin >> s;

    bool ans = isAlmostPalindrome(s);

    if(ans)
        cout << "Yes, the string is almost palindrome." << endl;
    else
        cout << "No, the strins is not almost palindrome." << endl;

    return 0;
}