
function titleCase(str) {

    str = str.toLowerCase().split(' ');
    str = str.map(word => word[0].toUpperCase() + word.slice(1) );

    return str.join(' ');
}

titleCase('I\'m a little tea pot');
