// Instant Loader Fix (Zero Delay)
function removeLoaderNow() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}

// 1. HTML 
document.addEventListener("DOMContentLoaded", removeLoaderNow);

// 2. Fast Safety Fallback (Max 1 second)
setTimeout(removeLoaderNow, 1000);


// Responsiveness for mobile/ipad menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}