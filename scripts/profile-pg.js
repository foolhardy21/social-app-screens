const openDialogBtn = document.querySelector('.open-modal')
// const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')

openDialogBtn.addEventListener('click', () => {
    modalContainer.classList.remove('dis-hidden')
    modalContainer.classList.add('pos-fixed')
    modalContainer.classList.add('tl-0')
    modalContainer.classList.add('z-5')
})

dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer.classList.add('dis-hidden')
        modalContainer.classList.remove('pos-fixed')
        modalContainer.classList.remove('tl-0')
        modalContainer.classList.remove('z-5')
    })
})

const openDialogBtn2 = document.querySelector('#btn-post')
// const modalDiv2 = document.querySelector('.modal2')
const modalContainer2 = document.querySelector('.modal2-container')
const dialogActionBtn2 = document.querySelectorAll('.dialog2-action-btn')

openDialogBtn2.addEventListener('click', () => {
    modalContainer2.classList.remove('dis-hidden')
    modalContainer2.classList.add('pos-fixed')
    modalContainer2.classList.add('tl-0')
    modalContainer2.classList.add('z-5')
})

dialogActionBtn2.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer2.classList.add('dis-hidden')
        modalContainer2.classList.remove('pos-fixed')
        modalContainer2.classList.remove('tl-0')
        modalContainer2.classList.remove('z-5')
    })
})