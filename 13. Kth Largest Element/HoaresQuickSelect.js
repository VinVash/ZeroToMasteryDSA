// Time complexity: O(N) - best case O(N^2) - worst case
// Space complexity: O(1) - because this is tail recursion.

const quickSelect = function(array, left, right, indexToFind) {
    if(left < right) {
        const partitionIdx = partition(array, left, right);

        if (partitionIdx === indexToFind) {
            return array[partitionIdx];
        } else if(indexToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx-1, indexToFind);
        } else {
            return quickSelect(array, partitionIdx+1, right, indexToFind);
        }
    }
}

const partition = function(array, left, right) {
    const pivotElement = array[right];
    let partitionIdx = left;
    for(let j = left; j < right; j++) {
        if(array[j] < pivotElement) {
            swqp(array, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);
    return partitionIdx;
}

const swap = function(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const getKthLargest = function(array, k) {
    const indexToFind = array.length - k;
    quickSelect(array, 0, array.length-1, indexToFind); // after this, the array is sorted.

    return array[indexToFind];
}