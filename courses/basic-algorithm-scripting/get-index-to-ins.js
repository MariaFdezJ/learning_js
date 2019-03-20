/**
 * Find index in array for given number, as if the array is sorted.
 *
 * @param {Array.<number>} arr - Original array of numbers.
 * @param {number} num - Number to find place for.
 *
 * @return Index of array where the number should be.
 */
function getIndexToIns(arr, num) {

    return arr.reduce( (acc, item)  => {

        if(item < num) {
            acc++;
        }

        return acc;
    }, 0);
}

getIndexToIns([40, 60], 50);
