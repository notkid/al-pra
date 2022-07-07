/**
 *
 * 插入排序
 *
 */

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];

    var j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];

      j--;
    }

    array[j + 1] = key;
  }

  return array;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(insertionSort(arr));
