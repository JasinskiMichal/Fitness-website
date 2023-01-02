//Mobile navigation
const btnNavEl = document.querySelector(".nav-mobile__icon");
const headerEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav--checked");
});

//Smooth scrolling animation
const allLinks = document.querySelectorAll(".nav__link");

if (window.innerWidth < 1000) {
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (href == "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);

        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
      if (link.classList.contains("nav__link"))
        headerEl.classList.toggle("nav--checked");
    });
  });
}

// ///////////////////////////////////////////////////////////
// // Sticky navigation

const section = document.querySelector(".background-img");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-115px",
  }
);
obs.observe(section);
