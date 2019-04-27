// Elemento para fazer o parallax, a distancia (windw.scroll) * o tempo que eu colocar
function parallax (element, distance, speed) {
    const item = document.querySelector(element)
    item.style.transform = `translateY(${distance * speed}px)`
}

window.addEventListener('scroll', () => {
    parallax('header', window.scrollY, 1)
    parallax('.rocket1', window.scrollY, 0.3)
    parallax('.rocket2', window.scrollY, 0.5)
})
