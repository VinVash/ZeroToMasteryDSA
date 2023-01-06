// Time complexity: O(N) - here we have sequential search and N is the total size.
// Space complexity: O(N) - stack can be the entire size of the 2-D array.

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const WallsAndGates = function(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === GATE) {
                dfs(matrix, row, col, 0);  // here 0 is the current step.
            }
        }
    }

    return matrix;
}

const dfs = function(matrix, row, col, currentStep) {
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || currentStep >  matrix[row][col]) {  // here the wall and the gates 
        // are also covered since they are already very low values, i.e., 0 and 1, and will never get changed
        //  because they will come under the last condition.
       return;
    }

    matrix[row][col] = currentStep;
    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col+currentDir[1], currentStep+1);
    }
}