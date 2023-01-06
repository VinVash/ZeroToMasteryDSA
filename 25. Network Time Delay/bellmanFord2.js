const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]];

const networkDelayTime = function(times, N, k) {
    const distances = new Array(N).fill(0)
    distances[k-1] = 0

    for(let i = 0; i < N-1; i++) { // iterate for N-1 times only
        let count = 0

        for(let j = 0; j < times.length; j++) {
            const source = times[j][0]
            const target = times[j][1]
            const weight = times[j][2]
        }

        if(distances[source] + weight < distances[target]) {
            distances[target] = distances[source] + weight
            count++
        }
    }
    
    if(count === 0) break; // if no change has been made in the above for loop.

    const ans = Math.max(...distances)
    return ans === Infinity ? -1 : ans // if ans is equal to infinity, then return -1 otherwise return the obtained answer.
}