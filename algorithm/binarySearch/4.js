
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     const n1 = nums1.length, n2 = nums2.length
//     const totalLn = n1 + n2
//     let median = 0


//     if (totalLn % 2 === 1) {
//         let midIndex = totalLn >> 1, median
//         median = findK(nums1, nums2, midIndex + 1)
//     } else {
//         let midIndex1 = totalLn >> 1 - 1, midIndex2 = totalLn >> 1, median
//         median = (findK(nums1, nums2, midIndex1) + findK(nums1, nums2, midIndex2)) / 2
//     }

//     function findK(nums1, nums2, k) {
//         const length1 = nums1.length, length2 = nums2.length
//         let index1 = 0, index2 = 0
//         while (true) {

//             if (index1 === length1) {
//                 return nums2[index2 + k - 1]
//             }
//             if (index2 === length2) {
//                 return nums1[index1 + k - 1]
//             }

//             if (k === 1) {
//                 return Math.min(nums1[index1], nums2[index2])
//             }

//             const half = k >> 1
//             const newIndex1 = Math.min(index1 + half, length1) - 1
//             const newIndex2 = Math.min(index2 + half, length2) - 1
//             const pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]

//             if (pivot1 <= pivot2) {
//                 k -= (newIndex1 - index1 + 1)
//                 index1 = newIndex1 + 1
//             } else {
//                 k -= (newIndex2 - index2 + 1)
//                 index2 = newIndex2 + 1
//             }
//         }


//     }
//     return median
// };



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1)
    }

    let left = 0, right = m, median1 = 0, median2 = 0
    while (left <= right) {
        const i = (left + right) >> 1
        const j = ((m + n + 1) >> 1) - i
        const nums_im1 = (i === 0 ? -Infinity : nums1[i - 1])
        const nums_i = (i === m ? Infinity : nums1[i])
        const nums_jm1 = (j === 0 ? -Infinity : nums2[j - 1])
        const nums_j = (j === n ? Infinity : nums2[j])

        if (nums_im1 <= nums_j) {
            median1 = Math.max(nums_im1, nums_jm1)
            median2 = Math.min(nums_i, nums_j)
            left = i + 1
        } else {
            right = i - 1
        }
    }
    return (m + n) % 2 === 0 ? (median1 + median2) /2 : median1
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))