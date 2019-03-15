
function getIndexToIns(arr, num) {

    return arr.reduce( (acc, item)  => {

        if(item < num) {
            acc++;
        }

        return acc;
    }, 0);
}

getIndexToIns([40, 60], 50);
