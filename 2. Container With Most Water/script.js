const getMaxWaterContainer = function(heights) {
    let maxArea = 0;
    for(let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1+1; p2 < heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2])
            const width = p2 - p1
            const area = height * width

            if (area > maxArea)
                maxArea = area
        }
    }
    
    return maxArea
}

const heights = [1, 2, 3, 4, 5, 6]

const ans = getMaxWaterContainer(heights)
console.log(ans)

// This is an O(n^2) solution (time complexity)
// Space complexity = O(1).