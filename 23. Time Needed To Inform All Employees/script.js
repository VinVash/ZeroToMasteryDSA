// Time complexity: O(3*N) = O(N)
// Space complexity: O(N)
// Building the adjacencyList: Space complexity; O(N)

const numOfMinutes = function(n, headID, managers, informTime) {
    const adjacencyList = managers.map(() => []);

    for(let e = 0; e < n; e++) {  // n is the total number of employees in the company.
        const manager = managers[e];
        if(manager === -1) continue;

        adjacencyList[manager].push(e);
    }  // till here the adjacencyList is completed.

    return dfs(headID, adjacencyList, informTime);
}

const dfs = function(currentID, adjacencyList, informTime) {
    if(adjacencyList[currentID].length === 0) {
        return 0;
    }

    let max = 0; // max time to inform
    const subordinates = adjacencyList[currentID];

    for(let i = 0; i < subordinates.length; i++) {
        max = Math.max(max, dfs(subordinates[i], adjacencyList, informTime));
    }

    return max + informTime[currentID];
}