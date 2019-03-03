// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius*(9/5) + 32;
    return fahrenheit;
}

convertToF(30);

// Reverse a String
function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}

reverseString('hello');

// Factorialize a Number
function factorialize(num) {

    if(num === 0){
        num = 1;
    } else{
        for (let i = num - 1; i > 0; i--){
            num *= i;
        }
    }
    return num;
}

factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {

    let temp = '';

    str.split(' ').forEach(function(word){
        if(temp.length < word.length){
            temp = word;
        }
    });

    return temp.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let temp = [];

    for(let i = 0; i< arr.length; i++){

        let num;

        arr[i].forEach(function(item,index){
            if(index === 0){
                num = item;

            } else {
                if(item > num){
                    num = item;
                }
            }
        });
        temp.push(num);
    }

    return temp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
    // To keep in mind that it was specified NOT to use endsWith method
    if(str.slice(-target.length) === target){
        return true;
    } else{
        return false;
    }
}

confirmEnding('Bastian', 'n');

// Repeate a String Repeat a String
function repeatStringNumTimes(str, num) {
    // To keep in mind that it was specified NOT to use repeat method
    if(num <= 0){
        return '';
    }

    let temp = str;
    for (let i = 1; i < num; i++){
        str+=temp;
    }

    return str;
}

repeatStringNumTimes('abc', 3);

// Truncate a String
function truncateString(str, num) {

    if(str.length > num){
        str = str.substring(0,num) + '...';
    }

    return str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
