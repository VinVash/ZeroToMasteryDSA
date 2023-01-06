const adjList = [[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]]

const traversalBFS = function(graph) { // in place of graph, we will be receiving the adjacency list.
    const queue = [0]
    const values = []
    const seen = {}

    while(queue.length) {
        const vertex = queue.shift()
        values.push(vertex) // add the vertex to the traversal.
        seen[vertex] = true
        const connections = graph[vertex]

        for(let i = 0; i < connections.length; i++) {
            const connection = connections[i]
            if(!seen[connection]) { // if not visited the vertex before.
                queue.push(connection)
            }
        }
    }

    return values
}