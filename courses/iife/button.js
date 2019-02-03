// button.js

const button = document.getElementById('button');

button.addEventListener('click', (function(){
    let count = 0;

    return function(){
       count += 1;
       debugger
       if (count === 2) {
         alert('This alerts appears every other press!');
         count = 0;
       }
    }
})());
