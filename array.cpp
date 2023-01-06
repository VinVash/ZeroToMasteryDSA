#include <bits/stdc++.h>
using namespace std;

void change(int array[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            array[i][j] *= 2;
        }
    }
}

void printarray(int array[][3], int m, int n) {
    cout << array[0][1] << endl;
}

int main() {
    int array[][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    printarray(array, 3, 3);
    
    // cout << array << endl; // These two 
    // cout << *array << endl; // hold the same thing.
    // cout << **array << endl; // This holds the number.

    cout << &array << endl; // This is also the address.
    cout << &array[0] << endl; // This is also the address.
    cout << &array[0][0] << endl; // This is also the address.

    // cout << *array[0] << endl;

    // cout << endl;

    // cout << array[1][2] << endl;
    // cout << *(*(array + 1) + 2) << endl;

    // cout << sizeof(&array) << endl;

    // for(int i = 0; i < 3; i++) {
    //     for(int j = 0; j < 3; j++) {
    //         cout << array[i][j] << " ";
    //     }
    //     cout << endl;
    // }

    return 0;
}