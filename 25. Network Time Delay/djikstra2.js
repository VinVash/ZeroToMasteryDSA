const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]]

const networkTimeDelay = function(times, N, k) { // N is the total number of nodes in the graph and k is the starting node
    const distances = new Array(N).fill(Infinity)
    const adjList = distances.map(() => [])

    distances[k-1] = 0 // the distance of the starting node from itself is 0

    const heap = new PriorityQueue((a, b) => distances[a] < distances[b])
    heap.push(k-1) // pushing the starting index.

    for(let i = 0; i < times.length; i++) {
        const source = times[i][0]
        const target = times[i][1]
        const weight = times[i][2]

        adjList[source-1].push([target-1, weight])
    }

    while(!heap.isEmpty()) {
        const currentVertex = heap.pop()
        const adjacent = adjList[currentVertex]

        for(let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0]
            const weight = adjacent[i][1]

            if(distances[currentVertex] + weight < distances[neighboringVertex]) {
                distances[neighboringVertex] = distances[currentVertex] + weight
                heap.push(neighboringVertex) // the priority queue will reorder according to the smallest value
            }
        }
    }
}