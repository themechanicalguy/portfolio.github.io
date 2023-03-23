//getting nodes
const scrollLink = document.querySelector(".header-scroll-link");
const aboutMe = document.querySelector("#about-me");

//scrolling to the section 1
scrollLink.addEventListener("click", function () {
  aboutMe.scrollIntoView({ behavior: "smooth" });
});
