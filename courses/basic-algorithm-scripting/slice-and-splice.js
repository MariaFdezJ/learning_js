
function frankenSplice(arr1, arr2, n) {

    let temp = arr2.slice(0);

    temp.splice(n,0,...arr1);

    return temp;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
