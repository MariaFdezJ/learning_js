/**
 * Find length of longest word on a provided sentence.
 *
 * @param {string} str - Sentence to get the longest word of.
 *
 * @return {number} The length of the longest word.
 */
function findLongestWordLength(str) {

    let strArray = str.split(' ');

    return strArray.reduce( (longestWordLength, word) =>
        longestWordLength > word.length
            ? longestWordLength
            : word.length
    , 0);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
