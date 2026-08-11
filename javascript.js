// Optimized Loader Code with Safety Fallback
function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader && loader.style.display !== "none") {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
}

// Event 1: Normal load event
window.addEventListener("load", hideLoader);

// Event 2: Safety fallback (agar heavy files stuck ho jayein to max 3 sec baad hide kar dega)
setTimeout(hideLoader, 3000);


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