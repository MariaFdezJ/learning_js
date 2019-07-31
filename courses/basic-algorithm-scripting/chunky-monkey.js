/**
 * Splits array into groups of specified size, into two dimensional array.
 *
 * @param {Array} arr - Array to be split.
 * @param {number} size - Length of the array groups.
 *
 * @return {Array} Two dimensional array.
 */
function chunkArrayInGroups(arr, size) {

    let resultArr = [];

    for(let index = 0; index < arr.length; index += size){
        resultArr.push(arr.slice(index, index + size));
    }

    return resultArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2);
