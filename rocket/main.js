const navShow = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');


    burguer.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

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
