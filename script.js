let bar_btn = document.querySelector('.myBar');
let cta_btn = document.querySelector('.cta-btn');
let close = document.querySelector('.close')
let modal = document.querySelector('.model-container');

bar_btn.addEventListener('click', () => document.body.classList.toggle('show-nav'))

cta_btn.addEventListener('click', () => modal.classList.add('show-modal'))

close.addEventListener('click', () => modal.classList.remove('show-modal'))

//hide model on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)