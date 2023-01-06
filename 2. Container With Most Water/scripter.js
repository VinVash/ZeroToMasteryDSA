// Optimised solution
// O(n) time complexity
// O(1) space complexity

const getMaxWaterContainer = function(heights) {
    let p1 = 0, p2 = heights.length-1, maxArea = 0
    while(p1 < p2) {
        const height = Math.min(heights[p1], heights[p2])
        const width = p2 - p1
        const area = height * width
        maxArea = Math.max(maxArea, area)

        if(heights[p1] <= heights[p2]) {
            p1++; // if height at p2 is greater, then bring p1 close to p2.
        } else {
            p2--; // if height at p1 is greater, then bring p2 close to p1.
        }
    }

    return maxArea
}

const heights = [1, 2, 3, 4, 5, 6]
const ans = getMaxWaterContainer(heights)
console.log(ans)