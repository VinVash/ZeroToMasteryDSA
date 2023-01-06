#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int> vec, int start, int end, int target){
    while(start <= end) {
        int mid = (start + end) / 2;
        
        if(vec[mid] == target)
            return mid;
        else if(vec[mid] > target)
            end = mid-1;
        else
            start = mid+1;
    }

    return -1; // if the element is not found.
}

void searchRange(vector<int> vec, int target) {
    if(vec.size() == 0) cout << "[-1, -1]" << endl;

    int firstPos = binarySearch(vec, 0, vec.size()-1, target);
    if(firstPos == -1) cout << "[-1, -1]" << endl;

    int startPos = firstPos, endPos = firstPos, temp1 = 0, temp2 = 0;

    while(startPos != -1) {
        temp1 = startPos;
        startPos = binarySearch(vec, 0, startPos-1, target); // main step.
    }
    startPos = temp1;

    while(endPos != -1) {
        temp2 = endPos;
        endPos = binarySearch(vec, endPos+1, vec.size()-1, target); // main step.
    }
    endPos = temp2;


    cout << "[" << startPos << ", " << endPos << "]" << endl;
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

    cout << "Enter the target: " << endl;
    int target; cin >> target;

    searchRange(vec, target);

    return 0;
}