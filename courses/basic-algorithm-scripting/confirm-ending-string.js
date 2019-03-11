
function confirmEnding(str, target) {
    // To keep in mind that it was specified NOT to use endsWith method
    return str.slice(-target.length) === target;
}

confirmEnding('Bastian', 'n');
