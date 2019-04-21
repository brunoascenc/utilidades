
const modalButton = document.querySelectorAll('[data-modal-target]') // Caso precise de mais de 1 modal
const closeModalBtn = document.querySelectorAll('[data-close-button]') // Caso precise de mais de 1 modal
const overlay = document.getElementById('overlay')

modalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal') // vai pegar o valor mais proximo com a class .modal
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active') //pegar todo o overlay/modal que está aberto
    modals.forEach(modal => {
        closeModal(modal)
    })
})

const openModal = (modal) => {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

const closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
