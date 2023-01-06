// Time Complexity: O(N)
// Space Complexity: O(N)

const levelOrder = function(root) {
    if(!root)
        return [];

    const result = [];
    const queue = [root];

    while(queue.length) {
        let length = queue.length, count = 0;
        const currentLevelValues = [];

        while(count < length) {
            const currentNode = queue.shift();
            currentLevelValues.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            count++;
        }
        result.push(currentLevelValues);
    }
    return result;
}