
function findLongestWordLength(str) {

	str = str.split(' ').reduce( (word, comparator) => {
    	return word.length > comparator.length ? word : comparator;
    });

    return str.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
