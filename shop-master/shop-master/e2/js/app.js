// Modal
const modalButton = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

modalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

const openModal = modal => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = modal => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

// Sticky Nav
const navBar = document.getElementsByClassName('topo-nav');
window.onscroll = function sticky() {
  if (window.pageYOffset > navBar[0].offsetTop) {
    navBar[0].classList.add('sticky-nav');
  } else {
    navBar[0].classList.remove('sticky-nav');
  }
};

// Login transition
const loginDiv = document.querySelector('.login-form');
const registrarDiv = document.querySelector('.registrar-form');
const recuperarDiv = document.querySelector('.recuperar-senha');
const voltarLink = document.querySelectorAll('.voltarLink');

document.querySelector('#registrarLink').addEventListener('click', () => {
  document.querySelector('.title').innerHTML = 'Cadastro';
  loginDiv.style.display = 'none';
  registrarDiv.style.display = 'flex';
});

document.querySelector('#recuperarLink').addEventListener('click', () => {
  document.querySelector('.title').innerHTML = 'Recuperar senha';
  loginDiv.style.display = 'none';
  recuperarDiv.style.display = 'flex';
});

voltarLink.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.title').innerHTML = 'Login';
    registrarDiv.style.display = 'none';
    recuperarDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
  });
});
