/**
 * 986. 区间列表的交集
 * 
 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    let res = []
    let i = 0, j = 0
    while(i<firstList.length && j <secondList.length) {
        let a1 = firstList[i][0], a2 = firstList[i][1]
        let b1 = secondList[j][0], b2 = secondList[j][1]
        if (b2 >= a1 && a2 >=b1) {
            res.push([Math.max(a1, b1), Math.min(a2, b2)])
        }
        if (b2 < a2) {
            j++
        } else {
            i++
        }
    }
    return res
};