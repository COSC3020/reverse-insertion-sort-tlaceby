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