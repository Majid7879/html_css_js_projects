const seleted = document.querySelector(".selected");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".options .option");

seleted.onclick = () => {
    menu.classList.toggle("open");
};

options.forEach(option => {
    option.onclick = () => {
        seleted.innerHTML = `
        <span>${option.innerHTML}</span>`;
        menu.classList.remove("open");
        options.forEach(option => {
            option.classList.remove("active");
        });
        option.classList.add("active");
    };
});