/**
 *
 *希尔排序
 *
 */

function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;

  console.time("希尔排序耗时:");

  while (gap < len / 5) {
    //动态定义间隔序列

    gap = gap * 5 + 1;
  }

  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];

      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }

      arr[j + gap] = temp;
    }
  }

  console.timeEnd("希尔排序耗时:");

  return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(shellSort(arr));
