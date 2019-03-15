
function largestOfFour(arr) {

    let largestNumbers = [];

    arr.forEach(smallArr => {

        let largestNumber = smallArr.reduce( (num, nextNum) =>
            num > nextNum ? num : nextNum
        );

        largestNumbers.push(largestNumber);

    });

    return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
