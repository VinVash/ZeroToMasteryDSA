// Time complexity: O(N) - where N is the size of array.
// Space complexity: O(N) - dp is the size N as we are storing value at every index in the cost array.

const minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = [];
    return Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
}

const minCost = function(i, cost, dp) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i];

    if(dp[i] !== undefined) return dp[i]; // added this line to remove redundant
    dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
    return dp[i];
}