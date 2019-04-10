
function destroyer(arr) {
    return arr.filter(num => [...arguments].slice(1).indexOf(num) < 0);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
