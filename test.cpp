#include <bits/stdc++.h>
using namespace std;

int solve(int a, int b) {
    char dp[a][a];
    for(int i = 0; i < a; i++){
        for(int j = 0; j < a; j++){
            dp[i][j] = 'A';
        }
    }
    long int Modulus = 1000000007;
    int centre = (a - 1) / 2;
    for(int i = centre - b; i <= centre + b; i++){
        for(int j = centre - b; j <= centre + b; j++){
            dp[i][j] = 'x';
        }
    }
    int cnt[a][a];
    for(int i = 0; i < a; i++){
        for(int j = 0; j < a; j++){
            cnt[i][j] = 0;
        }
    }
    for(int i = 0; i < a; i++){
        if(dp[i][0] != 'x')cnt[i][0] = 1;
    }
    for(int i = 0; i < a; i++){
        if(dp[0][i] != 'x')cnt[0][i] = 1;
    }
    for(int i = 1; i < a; i++){
        for(int j = 1; j < a; j++){
            if(dp[i][j] != 'x'){
                cnt[i][j] = (cnt[i - 1][j] + cnt[i][j - 1]) % Modulus;
            }
        }
    }
    return cnt[a - 1][a - 1] % Modulus;
}

int main() {

    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif

    cout << solve(3, 0) << endl;

    return 0;
}