/**
 * Check if a string ends with a specified string.
 *
 * Do not use endsWith method.
 *
 * @param {string} str - The string to verify.
 * @param {string} target - Target end to confirm.
 *
 * @return {boolean} Status of check.
 */
function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

confirmEnding('Bastian', 'n');
