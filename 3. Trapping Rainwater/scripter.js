const getTrappedRainwater = function(heights) {
    let left = 0, right = heights.length-1, leftmax = 0, rightmax = 0, total = 0;

    while(left < right) {
        if(heights[left] <= heights[right]) {
            if(heights[left] >= leftmax) {
                leftmax = heights[left];
            } else {
                total += leftmax - heights[left];
            }
            left++;
        } else {
            if(heights[right] >= rightmax) {
                rightmax = heights[right];
            } else {
                total += rightmax - heights[right];
            }
            right--;
        }
    }
    return total;
}