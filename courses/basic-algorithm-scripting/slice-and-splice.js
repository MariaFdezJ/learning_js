/**
 * Inserts elements of a first array in the specified index of a second array.
 *
 * @param {Array} arr1 - Array to be inserted.
 * @param {Array} arr2 - Array to receive elements of first array.
 * @param {number} n - Index where elements will be placed.
 *
 * @return {Array} Resulting array of adding first array into the second one.
 */
function frankenSplice(arr1, arr2, n) {

    let resultArray = arr2.slice(0);

    resultArray.splice(n, 0, ...arr1);

    return resultArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
