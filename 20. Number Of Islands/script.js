// BFS solution
// Time complexity: O(m*n)
// Space complexity: O(max(m, n))

// DFS solution
// Time complexity: O(m*n)
// Space complexity: O(m*n)
// The sequential code is what counts the islands. The BFS code is just to make sure that we don't double count the 1's (i.e., the islands).

const directions = [[-1, 0], [0, 1], [1, 0], [0,-1]];

const numberOfIslands = function(matrix) {
    if(matrix.length === 0) return 0;

    let islandCount = 0;

    for (let row = 0; row < matrix.length; row++) { // sequential traversal
        for (let col = 0; col < matrix[0].length; col++) { // sequential traversal
            if(matrix[row][col] === 1) {
                islandCount ++;
                matrix[row][col] = 0;
                const queue = []; // must use a linked list instead in c++, because it works in O(1) and queue.shift works in O(N) time in js.
                queue.push([row, col]);
                while(queue.length) {
                    const currentPos = queue.shift();
                    const currentRow = currentPos[0];
                    const currentCol = currentPos[1];

                    for(let i = 0; i < directions.length; i++) {
                        const currentDir = directions[i];
                        const nextRow = currentRow + currentDir[0];
                        const nextCol = currentCol + currentDir[1];

                        if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                            continue; // break this current iteration because the position is out of bounds.
                        }
                        
                        if(matrix[nextRow][nextCol] === 1) { // if we find a piece of land connected.
                            queue.push([nextRow, nextCol]);
                            matrix[nextRow, nextCol] = 0;
                        }
                    }
                }
            }
        }
    }

    return islandCount;
}