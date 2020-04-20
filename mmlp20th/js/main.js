const navShow = () => {
  const burguer = document.querySelector(".bars");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-links li");

  burguer.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //fade animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    //Burger animation
    burguer.classList.toggle("barsToggle");
  });
};
navShow();

$(document).ready(function () {
  TweenMax.set(".project-preview", { width: 0 });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".nav-item", function (evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        ease: Expo.easeInOut,
      });
    })
    .on("mouseout", ".nav-item", function (evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Expo.easeInOut,
      });
    });
});

$(".nav-link1").hover(function () {
  $(".project-preview").css({ "background-image": "url(eminem3.jpg)" });
});

$(".nav-link2").hover(function () {
  $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
});

$(".nav-link3").hover(function () {
  $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
});

$(".nav-link4").hover(function () {
  $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
});


//Page Transition
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.1,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".fade-up", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.5,
    delay: 0.2,
  });
}

$(function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          contentAnimation();
        },

        async once(data) {
          contentAnimation();
        },
      },
    ],
  });
});
