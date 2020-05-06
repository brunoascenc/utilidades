//Responsive Nav
const navShow = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burguer.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //fade animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //Burger animation
    burguer.classList.toggle("burguerToggle");
  });
};

navShow();

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Navbar Animation
const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = ["rgb(199, 111, 240)"];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
      activeAnchor.classList.toggle("activeLink");
    } else {
      activeAnchor.classList.remove("activeLink");
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});

//Smooth Scroll
const scroll = new SmoothScroll('[href*="#"]', {
  speed: 600
});


// Gsap Animations
const tl = gsap.timeline({defaults: {duration: 1}})
tl.from('.landAnimation', {y: -50, stagger: .4, opacity: 0})
  .from('svg', {y: 50, opacity: 0},'-=0.8')


//Form Validation
function validarForm() {
  const nome= document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("message").value;

  if (!nome) {
    document.getElementById("error-msg").innerHTML = "* Insira seu nome";
    return false;
  } else if (!email) {
    document.getElementById("error-msg").innerHTML = "* Insira seu email";
    return false;
  } else if (!textarea){
    document.getElementById("error-msg").innerHTML = "* Escreva sua mensagem";
    return false;
  }else {
    alert(
      "Tudo ok"
    );
    return true;
  }
}
