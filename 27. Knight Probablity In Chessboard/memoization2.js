const DIRECTIONS = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

const knightProbability = function(N, k, r, c) {
    const dp = new Array(k+1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)))

    return recurse(N, k, r, c, dp)
}

const recurse = function(N, k, r, c, dp) {
    if(r < 0 || r >= N || c < 0 || c >= N) return 0

    if(k === 0) return 1

    if(dp[k][r][c] !== undefined) return dp[k][r][c]

    let res = 0

    for(let i = 0; i < DIRECTIONS.length; i++) {
        const direction = DIRECTIONS[i]
        res += recurse(N, k, r+direction[0], c+direction[1], dp) / 8
    }

    dp[k][r][c] = res
    return dp[k][r][c]
}