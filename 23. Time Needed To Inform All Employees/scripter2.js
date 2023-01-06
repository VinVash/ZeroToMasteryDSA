const numOfMinutes = function(n, headID, managers, informTime) {
    const adjacencyList = managers.map(() => [])

    for(let e = 0; e < n; e++) {
        const manager = managers[e]
        if(manager === -1) continue

        adjacencyList[manager].push(e)
    } // till here the adjacency list is completed.

    return dfs(headID, adjacencyList, informTime) // the main function call is this line.
}

const dfs = function(currentID, adjacencyList, informTime) {
    if(adjacencyList[currentID].length === 0) { // if the current node has no direct subordinates.
        return 0;
    }

    let max = 0
    const subordinates = adjacencyList[currentID]

    for(let i = 0; i < subordinates.length; i++) {
        max = Math.max(max, dfs(subordinates[i], adjacencyList, informTime))
    }

    return max + informTime[currentID]
}