const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const body = document.body;

const openModal = () => {
    modal.classList.toggle('modal--open');
    body.classList.toggle('body--fixed')
}
const closeModal = openModal

btn.addEventListener('click', openModal)

modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})





































