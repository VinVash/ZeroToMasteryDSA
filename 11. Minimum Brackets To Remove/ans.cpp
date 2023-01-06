#include <iostream>
#include <string>
#include <stack>
#include <vector>
using namespace std;

string minBracketsToRemove(string s) {
    vector<char> res;
    for(int i = 0; i < s.size(); i++)
        res.push_back(s.at(i));

    stack<char> st;

    for(int i = 0; i < res.size(); i++) {
        if(res.at(i) == '(')
            st.push(i);
        else if(res.at(i) == ')' && st.size())
            st.pop();
        else if(res.at(i) == ')')
            res[i] = 'x';
    }

    while(st.size()) {
        int currentIdx = st.top();
        st.pop();
        res[currentIdx] = 'x';
    }

    string ans = "";

    for(int i = 0; i < res.size(); i++) {
        if(res[i] != 'x')
            ans = ans + res[i];
    }

    return ans;
}

int main () {
    cout << "Enter the string: " << endl;
    string s; cin >> s;

    string ans = minBracketsToRemove(s);
    
    cout << "The string after removing minimum brackets: " << ans << endl;

    return 0;
}