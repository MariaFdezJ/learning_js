/**
 * Rejects false values.
 *
 * @param {Array} arr - Array of different values.
 *
 * @return {Array} Array with only truthy values.
 */
function bouncer(arr) {
    return arr.filter( x => Boolean(x) );
}

bouncer([7, 'ate', '', false, 9]);
