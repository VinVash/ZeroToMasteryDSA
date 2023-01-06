// Time Complexity: O(logn) - constantly performing over and over again.
// Space Complexity: O(1)

const binarySearch = function(array, target) {
    let left = 0, right = array.length-1;
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        const foundVal = array[mid];
        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return -1; // if we have not found our target.
}

const searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];
    const firstPos = binarySearch(nums, 0, nums.length-1, target);

    if(firstPos === -1) return [-1, -1]; // the number is not found in the array.

    let startPos = firstPos, endPos = firstPos, temp1, temp2;

    while(startPos !== -1) {
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos-1, target);
    }
    startPos = temp1;

    while(endPos !== -1) {
        temp2 = endPos;
        endPos = binarySearch(nums, endPos+1, nums.length-1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
}

nums = [1, 3, 3, 5, 5, 5, 8, 9]
target = 5

searchRanger = searchRange(nums, target)
console.log(searchRanger)