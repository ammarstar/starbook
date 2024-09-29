window.addEventListener('scroll', ()=> {
    var header=document.querySelector('.gulir');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});