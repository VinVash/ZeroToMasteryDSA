// Time complexity: O(N)
// Space complexity: O(N)

const isValidBST = function(root) {
    if(!root) return true;

    return dfs(root, -Infinity, Infinity);
}

const dfs = function(node, min, max) {
    if(node.val <= min || node.val >= max) {
        return false;
    }
    if(node.left) {
        if(!dfs(node.left, min, node.val)) {
            return false;
        }
    }
    if(node.right) {
        if(!dfs(node.right, node.val, max)) {
            return false;
        }
    }

    return true; // if the function passes all the above code and comes to the end, then the tree is a valid BST.
}