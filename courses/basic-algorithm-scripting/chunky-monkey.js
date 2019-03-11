
function chunkArrayInGroups(arr, size) {

    let resultArr = [];

    for(let index = 0; index < arr.length; index += size){
        resultArr.push(arr.slice(index, index + size));
    }

    return resultArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2);
