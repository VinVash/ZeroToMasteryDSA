const Directions = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

const knightProbability = function(N, k, r, c) {
    const dp = new Array(k+1).fill(0).map(() => new Array(N).map(() => new Array(N).fill(0)));

    dp[0][r][c] = 1

    for(let step = 1; step <= k; step++) {
        for(let row = 0; row < N; row++) {
            for(let col = 0; col < N; col++) {
                for(let i = 0; i < Directions.length; i++) {
                    const dir = Directions[i]
                    const prevRow = row + dir[0]
                    const prevCol = col + dir[1]

                     if(prevRow >= 0 || prevRow < N || prevCol >= 0 || prevCol < N) {
                         dp[step][row][col] += dp[step-1][prevRow][prevCol] / 8
                     }
                }
            }
        }
    }

    let res = 0

    for(let row = 0; row < N; row++) {
        for(let col = 0; col < N; col++) {
            res += dp[k][i][j]
        }
    }

    return res;
}