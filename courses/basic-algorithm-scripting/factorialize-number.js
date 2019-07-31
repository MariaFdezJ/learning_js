/**
 * Factorializes a given number.
 *
 * @param {number} num - The number to be factorialized.
 *
 * @return {number} The result of factorializing.
 */
function factorialize(num) {

    if(num === 0){
        return 1;
    }

    for (let i = num - 1; i > 0; i--){
        num *= i;
    }

    return num;
}

factorialize(5);
