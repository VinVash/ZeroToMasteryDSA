#include <iostream>
#include <vector>
using namespace std;

void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(vector<int> vec, int low, int high) {
    int i = low - 1;
    int pivot = vec[high];

    for(int j = low; j <= high-1; j++) {
        if(vec[j] <= pivot) {
            i++;
            swap(&vec[i], &vec[j]);
        }
    }
    swap(&vec[i+1], &vec[high]);
    return i+1;
}

int quickSelect(vector<int> vec, int low, int high, int indexToFind) {
    if(low < high) {
        int pivot = partition(vec, low, high);

        if(pivot == indexToFind)
            return vec[pivot];
        else if (pivot > indexToFind)
            return quickSelect(vec, low, pivot-1, indexToFind);
        else
            return quickSelect(vec, pivot+1, high, indexToFind);
    }
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

    cout << "Enter the value of k: " << endl;
    int k; cin >> k;

    int indexToFind = n - k;
    quickSelect(vec, 0, n-1, k);

    cout << "The value of the kth largest element is: " << vec[indexToFind] << endl;

    return 0;
}