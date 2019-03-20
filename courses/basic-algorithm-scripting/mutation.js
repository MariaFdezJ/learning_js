/**
 * Checks if all letters of a string are present in another string.
 *
 * @param {Array.<string>} arr - Array of two strings.
 *
 * @return {boolean} The check status.
 */
function mutation(arr) {

    let result = true;

    for(let i = 0; i < arr[1].length; i++){

        let letter = arr[1][i].toLowerCase();

        if(arr[0].toLowerCase().indexOf(letter) < 0){
            result = false;
        }

    }

    return result;
}

mutation(['hello', 'hey']);
