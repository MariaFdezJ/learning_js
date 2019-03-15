
function findLongestWordLength(str) {

    let strArray = str.split(' ');

    return strArray.reduce( (longestWordLength, word) =>
        longestWordLength > word.length
            ? longestWordLength
            : word.length
    , 0);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
