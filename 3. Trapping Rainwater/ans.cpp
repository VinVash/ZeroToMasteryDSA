#include <iostream>
#include <vector>
using namespace std;

int solve(vector<int> vec, int n) {
    int left = 0, right = n-1, leftmax = 0, rightmax = 0, total = 0;

    while(left < right) {
        if(vec[left] <= vec[right]) {
            if(vec[left] >= leftmax)
                leftmax = vec[left];
            else
                total += leftmax - vec[left];

            left++;
        } else {
            if(vec[right] >= rightmax)
                rightmax = vec[right];
            else
                total += rightmax - vec[right];
            
            right++;
        }
    }
    return total;
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