// Time complexity: O(N), one while loop touching every element only once.
// Space complexity: O(N), due to the seen data structure.

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const traversalBFS = function(matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length.fill(false)));

    const values = [];

    const queue = [[0, 0]];  // We will start BFS from the left corner generally.

    while(queue.length) {
        const currentPos = queue.shift(); // shift removes the first element from the array.
        const row = currentPos[0];
        const col = currentPos[1];

        if(row < 0 || row >= matrix.length || col < 0 || col >= matrix.length || seen[row][col]) continue;  // skip this current while iteration.

        seen[row][col] = true; // marking the visited values.
        values.push(matrix[row][col]);  // keeping track of visited values.

        for(let i = 0; i <  directions.length; i++) {
            const currentDirection = directions[i];
            queue.push([row + currentDirection[0], col + currentDirection[1]]);
        }
    }

    return values;
}