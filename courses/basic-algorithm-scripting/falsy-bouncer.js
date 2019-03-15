
function bouncer(arr) {
    return arr.filter( x => Boolean(x) );
}

bouncer([7, 'ate', '', false, 9]);
