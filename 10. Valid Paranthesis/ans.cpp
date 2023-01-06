#include <iostream>
#include <string>
#include <stack>
#include <map>
using namespace std;

map<char, char> parens;

// We cannot add values to the map outside any function.
// C++ does not work this way. Executable lines of code belong in functions.
// What is your intent of having that insert call there?
// When exactly will that line of code be invoked?

bool isValidParanthesis(string s) {
    parens['('] = ')';
    parens['['] = ']';
    parens['{'] = '}';

    if(s.size() == 0) return true;

    stack<int> st;

    for(int i = 0; i < s.size(); i++) {
        if(parens[s[i]]) {
            st.push(s[i]);
        } else {
            char leftBracket = st.top();
            st.pop();
            char correctBracket = parens[leftBracket];

            if(s[i] != correctBracket) return false;
        }
    }

    return st.size() == 0;
}

int main() {
    cout << "Enter the string to check: " << endl;
    string s; cin >> s;

    bool ans = isValidParanthesis(s);

    if(ans)
        cout << "Yes the paranthesis are valid." << endl;
    else
        cout << "No, the paranthesis are not valid." << endl;

    return 0;
}