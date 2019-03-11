
function mutation(arr) {

    let result = true;

    for(let i = 0; i < arr[1].length; i++){

        let letter = arr[1][i].toLowerCase();

        if(arr[0].toLowerCase().indexOf(letter) < 0){
            result = false;
        }

    }

    return result;
}

mutation(['hello', 'hey']);
