/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 */
function diffArray(arr1, arr2) {

    return arr1.filter(num => arr2.indexOf(num) < 0).concat(
        arr2.filter(num => arr1.indexOf(num) < 0)
    );

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
