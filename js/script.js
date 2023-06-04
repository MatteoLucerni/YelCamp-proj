console.log('JS OK');

// close alert message
const alert = document.getElementById('alert');
const closeAlert = document.getElementById('close-alert');
// search input filter on seach page
const inputSearch = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const cardTitiles = document.querySelectorAll('main .card h5');
const mainCards = document.querySelectorAll('main .col-12');
console.log(mainCards);


// close alert message
closeAlert.addEventListener('click', function(){
    alert.classList.add('d-none');
})

// search input filter on seach page
searchButton.addEventListener('click', function(){
    
})