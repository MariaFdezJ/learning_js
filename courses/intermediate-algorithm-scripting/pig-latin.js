
function translatePigLatin(str) {

    let begin = [];
    let end = [];

    str.split('').forEach(letter => {
        if(letter.match(/[aeiou]/) || end.length !== 0){
            end.push(letter);
        } else {
            begin.push(letter);
        }
    });

    if(begin.length === 0) {
        return end.join('') + 'way';
    } else {
        return end.join('') + begin.join('') + 'ay';
    }
}

translatePigLatin('consonant');
