function myReplace(str, before, after) {

    let index = str.search(before);

    if(index >= 0) {
        let end = str.slice(index + before.length);
        let begin = str.slice(0, index + 1);

        if(begin[begin.length - 1].match(/[A-Z]/)){
            after = after[0].toUpperCase() + after.slice(1);
        }
        return begin.slice(0, begin.length - 1) + after + end;
    }

    return str;

}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');