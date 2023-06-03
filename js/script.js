console.log('JS OK');

const alert = document.getElementById('alert');
const closeAlert = document.getElementById('close-alert');

closeAlert.addEventListener('click', function(){
    alert.classList.add('d-none');
})