
function diffInChars(charA, charB, length){
    return (charA.charCodeAt(0) - charB.charCodeAt(0) + 1) === length;
}


function fearNotLetter(str) {

    if( diffInChars(str[str.length - 1], str[0], str.length) ){
        return undefined;
    }

    let check = str.slice(str.length - 1, str.length).charCodeAt(0);

    str = str.slice(0, str.length - 1);

    if( diffInChars(str[str.length - 1], str[0], str.length) ){
        return String.fromCharCode(check - 1);
    }
    
    return fearNotLetter(str);
}

fearNotLetter('abcdefghjklmno');
