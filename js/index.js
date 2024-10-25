const ham = document.querySelector("#hamburger");
ham.addEventListener("click",()=>{
    document.querySelector(".header_nav").classList.toggle("show")

})

const dropdownToggle = document.querySelector('.dropdown-toggle');
const menu = dropdownToggle.nextElementSibling;

dropdownToggle.addEventListener("mouseover", function() {
    menu.classList.add("show", "active");
});

menu.addEventListener("mouseover", function() {
    menu.classList.add("show", "active");
});

dropdownToggle.addEventListener("mouseout", function() {
    if (!menu.matches(':hover')) {
        menu.classList.remove("show", "active");
    }
});

menu.addEventListener("mouseout", function() {
    menu.classList.remove("show", "active");
});