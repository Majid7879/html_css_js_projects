const menu = document.querySelector("nav.links");
const menuBtn = document.querySelector(".menu-btn");

console.log(menu)
console.log(menuBtn)
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
})
