/**
 *
 * 选择排序
 *
 */

function selectionSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

console.log(selectionSort(arr));