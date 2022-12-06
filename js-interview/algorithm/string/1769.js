/**
 * 1769. 移动所有球到每个盒子所需的最小操作数
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
 var minOperations = function(boxes) {
    const result = []
    let left = 0, right = 0, operation = 0
    for(let i = 0; i<boxes.length; i++) {
        if (boxes[i] === '1') {
            right++
            operation+=i
        }
    }
    result.push(operation)
    for(let i = 0; i< boxes.length -1; i++) {
        if (boxes[i] ==='1') {
            left++
            right--
        }
        operation = operation + left -right
        result.push(operation)
    }
    return result
};