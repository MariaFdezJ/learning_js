/**
 * Reverse string.
 *
 * @param {string} str - String to be reversed.
 *
 * @return {string} Reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello');
