/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    let len = nums1.length;
    let ans = new Array(len).fill(0);
    nums1.sort((x, y) => x - y);
    // nums2中元素的顺序不能改变，因为计算结果的顺序依赖nums2的顺序，所以不能直接对nums2进行排序，而是利用其它数据结构来辅助。
    let indexB = new Array(len).fill(0).map((v, i) => i);
    indexB.sort((x, y) => {
      if (nums2[x] > nums2[y]) return 1;
      return -1;
    });
    // 比方说nums2为[13, 25, 32, 11]   如果排序的话，那就是[11,13,25,32]
    // indexB里面存放的就是[3, 0, 1, 2]
    // 3代表的是原来11所在的索引位置    0代表的是原来13所在的索引位置  1代表的是原来25所在的位置
    let i = 0; // 田忌的马排位
    let j = 0; // 齐王的马排位
    // B 从 len-1 开始（如果 A 当前最小的数无法对 B 形成优势，就需要让它覆盖 B 当前最大的数字）
    let k = len - 1;
    while (i < len) {
      // 跟对应的排位的马对比  能比得过的话就拼，拼不过的话，就让舍弃它去对抗对手最强的
      if (nums1[i] > nums2[indexB[j]]) {
        ans[indexB[j]] = nums1[i];
        j++;
      } else {
        ans[indexB[k]] = nums1[i];
        k--;
      }
      i++;
    }
    return ans;
  };
