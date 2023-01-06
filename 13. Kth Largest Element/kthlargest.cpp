#include <iostream>
#include <vector>
using namespace std;

void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(vector<int> vec, int low, int high) {
    int pivot = vec[high];
    int i = low - 1;

    for(int j = low; j <= high-1; j++) {
        if(vec[j] <= pivot) {
            i++;
            swap(&vec[i], &vec[j]);
        }
    }
    swap(&vec[i+1], &vec[high]);
    return i+1;
}

void quickSort(vector<int> vec, int low, int high) {
    if(low < high) {
        int pivot = partition(vec, low, high);
        quickSort(vec, low, pivot-1);
        quickSort(vec, pivot+1, high);
    }
}

int main() {
    vector<int> vec;

    cout << "Enter the size of the array: " << endl;
    int n; cin >> n;

    cout << "Enter the elements of the array: " << endl;
    for(int i = 0; i < n; i++) {
        int x; cin >> x;
        vec.push_back(x);
    }

    cout << "Enter the value of k: " << endl;
    int k; cin >> k;

    int indexToFind = n - k;
    quickSort(vec, 0, n-1);

    cout << "The value of kth largest element is: " << vec[indexToFind] << endl;
}