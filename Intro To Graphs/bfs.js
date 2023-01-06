// Time complexity: O()
// Space complexity: O()

const adjList = [[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]];

const traversalBFS = function(graph) {
    // in place of graph, we are getting the adjacency list.
    const queue = [0];
    const values = []; // this is containing the BFS traversal.
    const seen = {};

    while(queue.length) {
        const vertex = queue.shift();
        values.push(vertex);
        seen[vertex] = true;
        const connections = graph[vertex];

        for(let i = 0; i < connections.length; i++) {  // for loop for the bfs.
            const connection = connections[i];
            if(!seen[connection]) {
                queue.push(connection);
            }
        }
    }

    return values;
}