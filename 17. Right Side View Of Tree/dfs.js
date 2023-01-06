// This is the DFS solution of this question.
// Time complexity: O(N)
// Space complexity: O(N)

const dfs = function(node, currentLevel, result) {
    if(!node) return;
    if(currentLevel >= result.length) { // number of values stored in result refers to the number of levels already covered.
        result.push(node.value);
    }
    if(node.right) {
        dfs(node.right, currentLevel+1, result);
    }
    if(node.left) {
        dfs(node.left, currentLevel+1, result);
    }
}

const rightSideView = function(root) {
    const result = [];
    dfs(root, 0, result);
    return result;
}