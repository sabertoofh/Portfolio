let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header nav a");

// const sections = document.querySelectorAll('section');
// const links = document.querySelectorAll('a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* *turn this on
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + 80;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      links.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
}); */

/* 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');

                if (id === link.getAttribute('href').substring(1)) {
                   link.classList.add('active');

               document.querySelector('header nav a [href=*' + id + ']').classList.add('active');
                console.log("hii");
            });
        };
    });
}; */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
