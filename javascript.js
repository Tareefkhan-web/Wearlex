// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

//responsivnas of ipad
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
