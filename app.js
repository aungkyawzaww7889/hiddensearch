// GET UI 
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');


btn.addEventListener('click',function(){
    // console.log('hay');
    search.classList.toggle('active');
    input.focus();

});