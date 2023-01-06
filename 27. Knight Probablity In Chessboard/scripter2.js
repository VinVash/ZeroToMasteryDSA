const DIRECTIONS = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

const knightProbability = function(N, k, r, c) {
    if(r < 0 || r >= N || c < 0 || c >= N) return 0  // These two are the
    if(k === 0) return 1                             // base cases.

    let res = 0
    for(let i = 0; i < DIRECTIONS.length; i++) {
        const dir = DIRECTIONS[i]
        res += knightProbability(N, k-1, r+dir[0], c+dir[1]) / 8
    }

    return res
}