// Time complexity: O(N)  // since we have to iterate through the whole list.
// Space complexity: O(1) // since no scaling data structures are required.

const reverseBetween = function(head, m, n) {
    let currentPos = 1, currentNode = head, start = head;

    while(currentPos < m ) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }
    let newList = null, tail = currentNode; // end of the list after reversing.

    while(currentPos >= m && currentPos <= n) {
        const next = currentNode.next; // store next value.
        currentNode.next = newList; // update next value to list so far.
        newList = currentNode; // store current node as list so far.
        currentNode = next; // update current node to stored next value in line 15.
        currentPos++; // increment the position
    }

    start.next = newList; // always the head of the newList.  start is storing the start of the reverse linked list.
    tail.next = currentNode; // currentNode pointing at n+1.  tail is the end of the reversed linked list.

    if(m > 1) { // normal solution, if the length of the linked list is greater than 1.
        return head;
    } else { // if the length of the linked list is 1, then return the newList.
        return newList;
    }
}