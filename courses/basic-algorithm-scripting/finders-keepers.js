/**
 * Finds first element that passes a test.
 *
 * @param {Array} arr - Array to be filtered.
 * @param {Function} func - Function to filter.
 *
 * @return {*} The first element that passes the test of given function.
 */
function findElement(arr, func) {
    return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
