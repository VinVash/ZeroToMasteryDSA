class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    enqueue(val) {  // Space and time: O(1)
        this.in.push(val);
    }

    dequeue() { // O(N)
        if(this.out.length === 0) {
            while(this.in.length) {
                this.out.push(this.in.pop());
            }
        }

        return this.out.pop();
    }

    peek() {  // Returning the peek element of the queue. // O(N)
        if(this.out.length === 0) {
            while(this.in.length) {
                this.out.push(this.in.pop());
            }
        }
        return this.out[this.out.length-1];
    }

    empty() { // O(1)
        return this.in.length === 0 && this.out.length === 0;
    }
}