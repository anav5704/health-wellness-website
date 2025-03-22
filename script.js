console.log("Best Health")

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".active")?.classList.remove("active");
        this.classList.add("active");
    });
});
