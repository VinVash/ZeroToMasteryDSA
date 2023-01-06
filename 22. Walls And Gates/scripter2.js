const WALL = -1
const GATE = 0
const EMPTY = 2147483647
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const WallsAndGates = function(matrix) {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === GATE) {
                dfs(matrix, row, col, 0) // because current step at every gate is 0
            }
        }
    }

    return matrix
}

const dfs = function(matrix, row, col, currentStep) {
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || currentStep > matrix[row][col]) {
        return
    }

    matrix[row][col] = currentStep
    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i]
        dfs(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1)
    }
}