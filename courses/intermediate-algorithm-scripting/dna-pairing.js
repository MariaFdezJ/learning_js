const DNA = {
    C: ['C', 'G'],
    G: ['G', 'C'],
    T: ['T', 'A'],
    A: ['A', 'T']
};

function pairElement(str) {

    return str.split('').map( letter =>
        DNA[letter]
    );
}

pairElement('ATCGA');
