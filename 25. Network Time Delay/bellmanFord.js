// Time complexity: O(N + N*E) = O(N*E)
// Space complexity: O(N)

// When we run BellmanFord Algorithm on a connected graph what we get as an output is a single source shortest path graph which is actually a tree. Since a tree has only n-1 edges ,so maximum the path length between a source S and its destination will be atmost n-1 . What we do in BellmanFord is we relax edges of path length 1  , then in next iteration we relax edges of path length 2 ......so on till we relax edges of path length n-1 . Therefore the loop runs for n-1 times.

const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]];

const networkDelayTime = function(times, N, k) {
    const distances = new Array(N).fill(Infinity);
    distances[k-1] = 0;  // k-1 is the starting node.

    for(let i = 0; i < N-1; i++) {
        let count = 0; // increment whenever a value is changed.

        for(let j = 0; j < times.length; j++) {
            const source = times[j][0];
            const target = times[j][1];
            const weight = times[j][2];

            if(distances[source] + weight < distances[target]) {
                distances[target] = distances[source] + weight;
                count++;
            }
        }
        if(count === 0) break; // if no change has been made in the above for loop.
    }

    const ans = Math.max(...distances);
    return ans === Infinity ? -1 : ans;
}