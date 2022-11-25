window.addEventListener('scroll', ()=>{
    const head = document.querySelector('nav')
    head.classList.toggle('sticky', window.scrollY > 0);
})