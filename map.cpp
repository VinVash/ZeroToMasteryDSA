#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

map<char, char> seen;

seen['('] = ')';
seen['['] = ']';
seen['{'] = '}';

int main() {
    map<char, char>::iterator it;
    it = seen.begin();

    while(it != seen.end()) {
        cout << it->first << " " << it->second << endl;
        it++;
    }

    return 0;
}