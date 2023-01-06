// Time complexity: O(N)
// Space complexity: O(1)

const findCycle = function(head) {
    let hare = head, tortoise = head;

    while(true) {
        hare = hare.next;
        tortoise = tortoise.next;

        if(hare === null || hare.next === null) {
            return false;
        } else {
            hare = hare.next;
        }

        if(tortoise === hare) break;
    }

    let p1 = head, p2 = tortoise;

    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;  // The node where the cycle starts.
}