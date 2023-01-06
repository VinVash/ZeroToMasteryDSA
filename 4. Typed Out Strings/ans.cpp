#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool backspaceCompare(string s, string t) {
    int p1 = s.size() - 1;
    int p2 = t.size() - 1;

    while(p1 >= 0 || p2 >= 0) {
        if(s[p1] == '#' || t[p2] == '#') {
            if(s[p1] == '#') {
                int backcount = 2;

                while(backcount > 0) {
                    p1--;
                    backcount--;

                    if(s[p1] == '#')
                        backcount += 2;
                }
            }
            if(t[p2] == '#') {
                int backcount = 2;

                while(backcount > 0) {
                    p2--;
                    backcount--;

                    if(t[p2] == '#')
                        backcount+= 2;
                }
            }
        } else {
            if(s[p1] != t[p2])
                return false;
            else {
                p1--;
                p2--;
            }
        }
    }

    return true;
}

int main() {
    string s, t;
    cout << "Enter the two strings: " << endl;
    cin >> s >> t;

    bool ans = backspaceCompare(s, t);

    if(ans)
        cout << "Yes the typed out strings are equal." << endl;
    else
        cout << "No, the typed out strings are not equal." << endl;

    return 0;
}