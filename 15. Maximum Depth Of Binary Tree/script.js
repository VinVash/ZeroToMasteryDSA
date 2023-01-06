// Time Complexity: O(N)
// Space Complexity; O(logN) - height of the tree (best case)  O(N) - (worst case)

const maxDepth = function(node, currentDepth) {
    if(!node)
        return currentDepth;
    currentDepth++;
    return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
}