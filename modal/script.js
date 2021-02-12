'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBttn = document.querySelector('.close-modal');
const bttnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function() {
  // removing the hidden value from the class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < bttnsShowModal.length; i++) {
  bttnsShowModal[i].addEventListener('click', openModal);
}

closeBttn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// closing the modal with ESC key via keyboard
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log('ESC was pressed');
  }
});
