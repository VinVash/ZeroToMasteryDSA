// Time complexity: O(N) or O(m*n)  where N is the total size of the 2-D array, i.e., N = m*n.
// Space complexity: O(N). - worst case: where the queue if full of rotten oranges initially, so the queue is going to be full.

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = function(matrix) {
    if(matrix.length === 0) return 0;

    const queue = [];
    let freshOranges = 0;

    for(let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === ROTTEN) {
                queue.push([row, col]);
            }
            if(matrix[row][col] === FRESH) {
                freshOranges++;
            }
        }
    }

    let currentQueueSize = queue.length;
    let minutes = 0;

    while(queue.length) {
        if(currentQueueSize === 0) { // condition for increasing minutes. The fresh oranges adjacent to the rotten oranges have been rotten.
            minutes++;
            currentQueueSize = queue.length; // oranges to be checked in that particular minute.
        }

        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];

        for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentDir[0] + row;
            const nextCol = currentDir[1] + col;

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                continue;  // skip this current direction
            }

            if(matrix[nextRow][nextCol] === FRESH) {
                matrix[nextRow][nextCol] = ROTTEN;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
        }
    }

    if(freshOranges > 0) {
        return -1; // a fresh orange could not be reached and is still left.
    }

    return minutes;
}