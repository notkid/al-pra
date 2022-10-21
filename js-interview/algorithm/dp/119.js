/**
 * 
 * 119. 杨辉三角 II
 * 
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    const ret = []
    for(let r = 0;r <=rowIndex; r++) {
        const arr = new Array(r + 1).fill(1)
        for(let col = 1; col<r;col++) {
            arr[col] = ret[r-1][col -1] + ret[r-1][col]
        }

        ret.push(arr)
    }
    return ret[rowIndex]
};