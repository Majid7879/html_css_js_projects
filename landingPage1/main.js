// open, close menu
const menu = document.querySelector("header ul.links");
const menuBtn = document.querySelector("header .menu-icon");

menuBtn.addEventListener('click', (e) => {
    if (menu.classList.contains('open')) {
        menu.classList.remove("open");
        menuBtn.classList.remove("close-icon")
    } else {
        menu.classList.add("open");
        menuBtn.classList.add("close-icon");
    }
});

// scroll btns
const scrollBar = document.querySelector('.clients .client_logos');
const scrollLeft = document.getElementById("btn-scroll-left");
const scrollRight = document.getElementById("btn-scroll-right");

scrollLeft.onclick = () => {
    scrollBar.scrollBy({
        left: -50,
        behavior: 'smooth'
    });
};
scrollRight.onclick = () => {
    scrollBar.scrollBy({
        left: 50,
        behavior: 'smooth'
    });
};