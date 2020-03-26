//Responsive Nav
const navShow = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');


    burguer.addEventListener('click', () =>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //fade animation
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
               link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger animation
        burguer.classList.toggle('burguerToggle');
    });
}

navShow();

window.addEventListener('scroll', () =>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


//Navbar Animation
const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradients = ['rgb(199, 111, 240)']

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index')
        const coords = activeAnchor.getBoundingClientRect()
        console.log(className)
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('width', `${directions.width}px`)
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.background = gradients[gradientIndex]
            activeAnchor.classList.toggle('activeLink')
        }else{
            activeAnchor.classList.remove('activeLink')
        }

    })

}

sections.forEach(section => {
    observer.observe(section)
})

const scroll = new SmoothScroll('.links a[href*="#"]', {
    speed: 600
})