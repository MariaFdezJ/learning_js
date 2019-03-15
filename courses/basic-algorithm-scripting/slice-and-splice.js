
function frankenSplice(arr1, arr2, n) {

    let resultArray = arr2.slice(0);

    resultArray.splice(n, 0, ...arr1);

    return resultArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
