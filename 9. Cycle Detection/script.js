// Time complexity: O(N)
// Space complexity: O(N)

const findCycle = function(head) {
    let currentNode = head;
    const seenNodes = new Set();

    while(!seenNodes.has(currentNode)) {
        if(currentNode.next === null) {
            return false;
        }
        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return currentNode;
}