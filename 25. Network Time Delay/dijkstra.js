// Time complexity: O(2N + E + ElognN + NlogN) = O(ElogN)
// Space complexity: O(E + N)

const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]];

const networkDelayTime = function(times, N, k) {
    const distances = new Array(N).fill(Infinity);
    const adjList = distances.map(() => []);  // initialising the adjacency list.

    distances[k-1] = 0;

    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k-1);  // pushing the index

    for(let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];

        adjList[source - 1].push([target-1, weight]);  // target-1 is the index of target.
    }

    while(!heap.isEmpty()) {
        const currentVertex = heap.pop(); // popping the target node
        const adjacent = adjList[currentVertex]; // adjacent containes the direct connections from the target node.

        for(let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0];
            const weight = adjacent[i][1];

            if(distances[currentVertex] + weight < distances[neighboringVertex]) {
                distances[neighboringVertex] = distances[currentVertex] + weight;
                heap.push(neighboringVertex);  // the priority queue will reorder according to the smallest value.
            }
        }
    }

    const ans = Math.max(...distances);

    return ans === Infinity ? -1 : ans;
}