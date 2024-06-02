let btn = document.querySelector('#btn')
let nav = document.querySelector('#nav-res')
let navList = document.querySelectorAll('#nav-res > li')

btn.addEventListener('click', (e) => {
    nav.classList.toggle('nav-res')
    nav.classList.toggle('nav')
})

navList.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('nav-res')
        nav.classList.toggle('nav')
    })
})

