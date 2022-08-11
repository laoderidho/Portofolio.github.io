const icon = document.querySelector('.icon');
const nav = document.querySelector('nav ul');

icon.addEventListener('click', function(){
    nav.classList.toggle('slide')
})