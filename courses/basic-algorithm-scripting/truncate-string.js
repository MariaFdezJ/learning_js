/**
 * Truncates a string to a given length.
 *
 * @param {string} str - String to truncate.
 * @param {number} num - Expected length of string.
 *
 * @return {string} String of specified length.
 */
function truncateString(str, num) {

    if(str.length > num){
        return str.substring(0,num) + '...';
    }

    return str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
