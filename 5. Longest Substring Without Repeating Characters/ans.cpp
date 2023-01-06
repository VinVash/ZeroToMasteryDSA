#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

int longestSubstring(string s) {
    if(s.size() <= 1) return s.size();

    map<char, int> seen;
    int left = 0, longest = 0;

    for(int right = 0; right < s.size(); right++) {
        char currentChar = s[right];
        int prevSeenChar = seen[currentChar];

        if(prevSeenChar >= left)
            left = prevSeenChar + 1;
        
        seen[currentChar] = right;
        longest = max(longest, right-left+1);
    }

    return longest;
}

int main() {
    cout << "Enter the string: " << endl;
    string s; cin >> s;

    int ans = longestSubstring(s);
    cout << "Ans is: " << ans << endl;

    return 0;
}