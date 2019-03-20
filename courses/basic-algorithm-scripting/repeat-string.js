/**
 * Repeats string as many times as requested.
 *
 * @param {string} str - String to be repeated.
 * @param {number} num - Amount of times to repeat the string.
 *
 * @return {string} Repated string.
 */
function repeatStringNumTimes(str, num) {
    // To keep in mind that it was specified NOT to use repeat method
    if(num <= 0){
        return '';
    }

    let tempStr = str;

    for (let counter = 1; counter < num; counter++){
        str += tempStr;
    }

    return str;
}

repeatStringNumTimes('abc', 3);
