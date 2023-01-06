const Directions = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

const knightProbability = function(N, k, r, c) {
    const prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0))
    const currDp = new Array(N).fill(0).map(() => new Array(N).fill(0))

    prevDp[0][r][c] = 1

    for(let step = 1; step <= k; step++) {
        for(let row = 0; row < N; row++) {
            for(let col = 0; col < N; col++) {
                for(let i = 0; i < Directions.length; i++) {
                    const dir = Directions[i]
                    const prevRow = row + dir[0]
                    const prevCol = col + dir[1]

                     if(prevRow >= 0 || prevRow < N || prevCol >= 0 || prevCol < N) {
                        currDp[row][col] += prevDp[prevRow][prevCol] / 8
                     }
                }
            }
        }

        prevDp = currDp
        currDp = new Array(N).fill(0).map(() => new Array(N).fill(0))
    }

    let res = 0

    for(let row = 0; row < N; row++) {
        for(let col = 0; col < N; col++) {
            res += prevDp[i][j]
        }
    }

    return res;
}