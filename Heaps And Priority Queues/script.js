// Program for the implementation of priority queue.

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this._heap[0]; // returns the first element of the heap array.
    }

    _parent(idx) {
        return Math.floor((idx-1)/2);
    }

    _leftChild(idx) {
        return idx*2 + 1;
    }

    _rightChild(idx) {
        return idx*2 + 2;
    }

    _swap(i, j) {
        const temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();
        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size-1;
        while(nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        } 
    }

    pop() {
        if(this.size() > 1) {
            this._swap(0, this.size()-1);
        }
        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let nodeIdx = 0; // start at the top, i.e., the root.

        // this._leftChild(nodeIdx) < this.size() means that the left child exists.

        while((this._leftChild(nodeIdx) < this.size() && this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
        (this._rightChild(nodeIdx) < this.size() && this._compare(this._rightChild(nodeIdx), nodeIdx))) {
            const greaterNodeIdx = this._rightChild(nodeIdx) < this.size() && this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
            ?
            this._rightChild(nodeIdx) : this._leftChild(nodeIdx);
            this._swap(greaterNodeIdx, nodeIdx);
            nodeIdx = greaterNodeIdx;
        }
    }
}