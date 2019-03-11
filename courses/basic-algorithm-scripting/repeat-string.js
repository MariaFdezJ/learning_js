
function repeatStringNumTimes(str, num) {
    // To keep in mind that it was specified NOT to use repeat method
    if(num <= 0){
        return '';
    }

    let tempStr = str;

    for (let counter = 1; counter < num; counter++){
        str += tempStr;
    }

    return str;
}

repeatStringNumTimes('abc', 3);
