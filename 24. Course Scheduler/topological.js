// Time complexity: O(P + N^2) or O(n + E)- p is the number of prerequisites.
// n arrays inside the adjacency list and E is the total number of edges in the graph.
// Space complexity: O(N^2) or O(n + E)
// Topological sort is the best way of detecting a cycle.

const prerequisites = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];

// const inDegree = [1, 1, 2, 1, 2, 0];
// const adjList = [[1], [2], [], [0, 4], [], [2, 3, 4]];

const canFinish = function(n, prerequisites) {
    const inDegree = new Array(n).fill(0);
    const adjList = inDegree.map(() => []);

    for(let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];

        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0]);
    }

    const stack = [];
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) stack.push(i);
    }

    let count = 0;
    while(stack.length) {  // as long as there is something left inside the stack.
        const current = stack.pop();
        count++;
        const adjacent = adjList[current];
        for(let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if(inDegree[next] === 0) stack.push(next);
        }
    }

    return count === n; // here we have processed every single vertex in the graph.
}