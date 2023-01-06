#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int solve(vector<int> vec, int n) {
    int p1 = 0, p2 = n-1, maxarea = 0;

    while(p1 < p2) {
        int height = min(vec[p1], vec[p2]);
        int width = p2 - p1;
        int area = height * width;
        maxarea = max(maxarea, area);

         // move the smaller height pointer towards the other.
        if(vec[p1] <= vec[p2])
            p1++;
        else
            p2--;
    }
    
    return maxarea;
}

int main() {
    cout << "Enter the size of the array: " << endl;
    int n; cin >> n;

    cout << "Enter the elements of the array: " << endl;
    vector<int> vec;
    for(int i = 0; i < n; i++) {
        int x; cin >> x;
        vec.push_back(x);
    }

    int ans = solve(vec, n);
    cout << "Ans is: " << ans << endl;

    return 0;
}