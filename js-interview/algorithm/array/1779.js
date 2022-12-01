/**
 * 1779. 找到最近的有相同 X 或 Y 坐标的点
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let minIndex = -1
    let minVal = Number.MAX_SAFE_INTEGER
    for(let i =0;i<points.length;i++) {
        if (points[i][0] === x) {
            if (Math.abs(points[i][1] - y) < minVal ) {
                minVal = Math.abs(points[i][1] - y)
                minIndex = i
            }
        } else if ( points[i][1] ===y) {
            
            if (Math.abs(points[i][0] - x) < minVal ) {
                minVal = Math.abs(points[i][0] - x)
                minIndex = i
            }
        }
    }
    return minIndex
};