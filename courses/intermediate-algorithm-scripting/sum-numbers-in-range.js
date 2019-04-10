
function sumAll(arr) {

    let sum = 0;

    arr.sort( (numA, numB) => numA - numB);

    for(let num = arr[0]; num <= arr[1]; num++){
        sum += num;
    }

    return sum;
}

sumAll([1, 4]);
