const getTrappedRainwater = function(heights) {
    let totalWater = 0
    for (let p = 0; p < heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0 // leftP and rightP are left and right pointers for finding out the 
        // highest walls to the left and to the right of the current block.

        while(leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP])
            leftP--;
        }

        while(rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP])
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - heights[p]

        if (currentWater > 0)
            totalWater += currentWater
    }

    return totalWater
}

const heights = [4, 3, 4, 3, 4]

const ans = getTrappedRainwater(heights)

console.log(ans)