var btnSearch = document.querySelector('.search-btn');
var searchBox = document.querySelector('.search-box');
btnSearch.addEventListener('click', (e)=>{
    searchBox.classList.toggle('open');
})