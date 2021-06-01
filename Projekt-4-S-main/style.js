[document.getElementsByClassName("navButton")[0]].forEach((item) => {
item.addEventListener("click", (event) => {
    document.querySelector(".navigationLinks").classList.toggle("active");
});
});

