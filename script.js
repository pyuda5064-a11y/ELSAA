function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("show");

}


const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector("nav");

        nav.classList.remove("show");

    });

});
