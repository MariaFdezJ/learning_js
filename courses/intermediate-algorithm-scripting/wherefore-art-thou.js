
function whatIsInAName(collection, source) {

    return collection.filter(itemObj => {

        let comparatorStatus = true;

        for(let prop in source){

            if(itemObj[prop] !== source[prop]){
                comparatorStatus = false;
            }

        }
        
        return comparatorStatus;
    });

}

whatIsInAName([
    { first: 'Romeo', last: 'Montague' }, 
    { first: 'Mercutio', last: null }, 
    { first: 'Tybalt', last: 'Capulet' }], 
    { last: 'Capulet' });
