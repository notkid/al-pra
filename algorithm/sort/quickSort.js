/**
 *
 *
 *
 */

{
  function quickSort(array, left, right) {
    console.time("1.快速排序耗时");

    if (
      Object.prototype.toString.call(array).slice(8, -1) === "Array" &&
      typeof left === "number" &&
      typeof right === "number"
    ) {
      if (left < right) {
        var x = array[right],
          i = left - 1,
          temp;

        for (var j = left; j <= right; j++) {
          if (array[j] <= x) {
            i++;

            temp = array[i];

            array[i] = array[j];

            array[j] = temp;
          }
        }

        quickSort(array, left, i - 1);

        quickSort(array, i + 1, right);
      }

      console.timeEnd("1.快速排序耗时");

      return array;
    } else {
      return "array is not an Array or left or right is not a number!";
    }
  }

  console.log(quickSort([2, 3, 1, 5, 4], 0, 4));
}

{
  const Compare = {
    LESS_THAN: 0,
    BIGGER_THAN: 1,
    EQUAL: 2,
  };

  function defaultCompareFn(a, b) {
    if (a > b) {
      return Compare.BIGGER_THAN;
    }
    if (a < b) {
      return Compare.LESS_THAN;
    }
    return Compare.EQUAL;
  }

  function quickSort(array, compareFn = defaultCompareFn) {
    return quick(array, 0, array.length - 1, compareFn);
  }

  function quick(array, left, right, compareFn) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right, compareFn);
      if (left < index - 1) {
        quick(array, left, index - 1, compareFn);
      }
      if (index < right) {
        quick(array, index, right, compareFn);
      }
    }
    return array;
  }

  function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
        i++;
      }
      while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }   
  console.time("2.快速排序耗时");
  console.log(quickSort([2, 3, 1, 5, 4]));
  console.timeEnd("2.快速排序耗时");
}
