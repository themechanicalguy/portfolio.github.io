//getting nodes
const scrollLink = document.querySelector(".header-scroll-link");
const aboutMe = document.querySelector("#about-me");
const nav = document.getElementById("nav");

//scrolling to the section 1
scrollLink.addEventListener("click", function () {
  aboutMe.scrollIntoView({ behavior: "smooth" });
});

//Event delegation nav styling
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

// Implementation of sticky nav
const header = document.querySelector(".header-section");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  // getting first elment from entries
  const [entry] = entries;

  if (entry.isIntersecting) nav.classList.add("d-none");
  else nav.classList.remove("d-none");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 1, 0.2],
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//implementation of reveal element on scroll
const allSections = document.querySelectorAll("section");
console.log(allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entries);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
