/**
 * @param {number[]} a 
 * @returns {number[]}
 */
function insertionSortReverse(a) {
    for (let i = a.length - 2; i >= 0; i--) {
        const val = a[i];
        let j = i + 1;
        
        while (j < a.length && a[j] < val) {
            a[j - 1] = a[j];
            j++;
        }
        
        a[j - 1] = val;
    }

    return a;
}

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
      var val = arr[i];
      var j;
      for(j = i; j > 0 && arr[j-1] > val; j--) {
        arr[j] = arr[j-1];
      }
      arr[j] = val;
    }
    return arr;
  }