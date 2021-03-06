// Animate on Scroll
AOS.init();

// Navbar toggle
let navUl = document.querySelector("#navUl");
let hamburgerIcon = document.querySelector("#hamburgerIcon");
let nav = document.querySelector("nav");
hamburgerIcon.addEventListener("click", hamburgerToggle);
function hamburgerToggle() {
  nav.classList.toggle("h-full");
  nav.classList.toggle("hidden");
  navUl.classList.toggle("bg-gray-900");
  navUl.classList.toggle("bg-opacity-70");
  navUl.classList.toggle("h-screen");

  hamburgerIcon.classList.toggle("mNav-open");
  hamburgerIcon.children[0].classList.toggle("rotate-45");
  hamburgerIcon.children[0].classList.toggle("border-white");
  hamburgerIcon.children[1].classList.toggle("hidden");
  hamburgerIcon.children[2].classList.toggle("w-6");
  hamburgerIcon.children[2].classList.toggle("-rotate-45");
  hamburgerIcon.children[2].classList.toggle("border-white");
}
document.addEventListener("scroll", () => {
  if (document.documentElement.getBoundingClientRect().top < -100) {
    navUl.classList.add("md:shadow-xl", "md:bg-blue-900");
  } else {
    navUl.classList.remove("md:shadow-xl", "md:bg-blue-900");
  }
});

navUl.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("mNav-open")) {
      hamburgerToggle();
    }
  });
});
