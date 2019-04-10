
function uniteUnique(arr) {
  let others = [...arguments].slice(1);
  others.forEach(x => {
    arr = arr.concat(x.filter( y => {
      if(arr.indexOf(y) < 0){
        return y;
      }
    }));
  });

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

