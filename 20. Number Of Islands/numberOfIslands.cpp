#include <bits/stdc++.h>
using namespace std;

int numberOfIslands(int m, int n, int matrix[][5]) {
    int islandCount = 0;
    vector<pair<int, int> > directions;
    directions.push_back(make_pair(-1, 0));
    directions.push_back(make_pair(0, 1));
    directions.push_back(make_pair(1, 0));
    directions.push_back(make_pair(0, -1));

    for(int row = 0; row < m; row++) {
        for(int col = 0; col < n; col++) {
            if(matrix[row][col] == 1) {
                islandCount++;
                matrix[row][col] = 0; // since we have already considered that part.
                queue<pair<int, int> > q;
                q.push(make_pair(row, col));
                while(q.size()) {
                    pair currentPos = q.front();
                    q.pop();
                    int currentRow = currentPos.first;
                    int currentCol = currentPos.second;

                    for(int i = 0; i < directions.size(); i++) {
                        pair currentDir = directions.at(i);
                        int nextRow = currentDir.first + currentRow;
                        int nextCol = currentDir.second + currentCol;

                        if(nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n) continue;

                        if(matrix[nextRow][nextCol] == 1) {
                            q.push(make_pair(nextRow, nextCol));
                            matrix[nextRow][nextCol] = 0;
                        }
                    }
                }
            }
        }
    }

    return islandCount;
}


int main() {
    int matrix[5][5] = {{1, 1, 1, 1, 0},
                        {1, 1, 0, 1, 0},
                        {1, 1, 0, 0, 0},
                        {0, 0, 0, 0, 0}};

    int matrix2[5][5] = {{1, 1, 0, 0, 0},
                         {1, 1, 0, 0, 0},
                         {0, 0, 1, 0, 0},
                         {0, 0, 0, 1, 1}};

    int ans = numberOfIslands(5, 5, matrix);
    cout << ans << endl;

    int ans2 = numberOfIslands(5, 5, matrix2);
    cout << ans2 << endl;

    return 0;
}