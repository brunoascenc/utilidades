const navShow = () => {
  const burguer = document.querySelector(".bars");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links li");

  burguer.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //fade animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${index / 7 +
          0.4}s`;
      }
    });

    //Burger animation
    burguer.classList.toggle("barsToggle");
  });
};
navShow();


$(document).ready(function() {
    TweenMax.set(".project-preview", { width: 0 });

    var tl = new TimelineLite();

    $(document)
      .on("mouseover", ".nav-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 1, {
          width: "600px",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".nav-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
      });
  });

  $(".nav-link1").hover(function() {
    $(".project-preview").css({ "background-image": "url(eminem3.jpg)" });
  });

  $(".nav-link2").hover(function() {
    $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
  });

  $(".nav-link3").hover(function() {
    $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
  });

  $(".nav-link4").hover(function() {
    $(".project-preview").css({ "background-image": "url(mmlp.jpg)" });
  });