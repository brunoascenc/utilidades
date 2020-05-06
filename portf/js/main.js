//Cursor custom
const cursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".links li");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-grow");
    link.classList.remove("hover-link");
  })
  link.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-grow");
    link.classList.add("hover-link");
  })
})

//Responsive Nav
const navShow = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //Burger animation
    burger.classList.toggle("burgerToggle");
  });
};
navShow();

//Close Nav
const closeNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.toggle("burgerToggle")
    })
  })
}
closeNav();

//Fixed Nav
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


// GSAP
TweenMax.from(".h1", 2, {
  delay: 0.5,
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut
});

TweenMax.from(".p1", 2, {
  delay: 0.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".a1", 2, {
  delay: 0.9,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
  delay: 0.2,
  opacity: 0,
  y: -20,
  ease: Expo.easeInOut
});

TweenMax.from("nav", 2, {
  delay: 0.3,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".circleOne", 2, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".circleTwo", 2, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
});


// Nav smooth scroll
const scroll = new SmoothScroll('[href*="#"]', {
  speed: 600
});
