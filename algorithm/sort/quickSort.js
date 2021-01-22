/**
 * 
 * 
 * 
 */


function quickSort(array, left, right) {

    console.time('1.快速排序耗时');

    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {

        if (left < right) {

            var x = array[right], i = left - 1, temp;

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

        console.timeEnd('1.快速排序耗时');

        return array;

    } else {

        return 'array is not an Array or left or right is not a number!';

    }

}