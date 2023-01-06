// Time complexity: O(P + N^3)  - p is prerequisites
// Space complexity: O(N^2)

const prerequisites = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]; // courses array with prerequisites.

const canFinish = function(n, prerequisites) {
    const adjList = new Array(n).fill(0).map(() => []); // initialising the adjacency list.

    for(let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0]);
    } // completed the adjacency list till here.

    for(let v = 0; v < n; v++) { // v stands for vertex
        const queue = [];
        const seen = {};

        for(let i = 0; i < adjList[v].length; i++) { // direct arrows pointing from v to other nodes.
            queue.push(adjList[v][i]);
        }
        while(queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if(current === v) return false; // detected a cycle here.
            const adjacent = adjList[current];

            for(let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if(!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
}