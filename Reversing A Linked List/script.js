// Time Complexity: O(N)
// Space Complexity: O(1) cause we are just changing the values of variables. We are just making reference pointers to 
// existing objects in memory.

const reverseLinkedList = function(head) {
    let prev = null;
    let current = head;
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}