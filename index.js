window.addEventListener('scroll', ()=>{
    const head = document.querySelector('header')
    head.classList.toggle('sticky', window.scrollY > 0);
})