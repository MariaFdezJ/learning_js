/**
 * Convert string to lowercase, each word separated with dash symbol.
 * 
 * @param {string} str - String to be converted.
 * 
 * @return {string} Converted string.
 */
function spinalCase(str) {

    let arrFromStr = str.split(/[^a-zA-Z0-9]/);
    let resultArray = [];

    arrFromStr.forEach(smallStr => {

        // Make first letter of each word low case
        let tempStr = smallStr[0].toLowerCase() + smallStr.slice(1);

        smallStr = tempStr;

        if(tempStr.toLowerCase() !== smallStr){

            tempStr = smallStr.split('').map( letter =>
                (letter.toLowerCase() !== letter)
                    ? `-${letter.toLowerCase()}`
                    : letter
            ).join('');

        }

        resultArray.push(tempStr);
    });

    return resultArray.join('-');
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');
