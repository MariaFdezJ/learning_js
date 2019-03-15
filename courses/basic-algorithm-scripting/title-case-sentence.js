
function titleCase(str) {

    let strArray = str.toLowerCase().split(' ');

    str = strArray.map( word =>
        word[0].toUpperCase() + word.slice(1)
    ).join(' ');

    return str;
}

titleCase('I\'m a little tea pot');
