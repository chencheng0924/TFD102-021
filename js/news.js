// newsall.getElementsByClassName = '.newsall'
let newsall = document.querySelector('.newsall')
let news = document.querySelector('.news')
let news1 = document.querySelector('.news1')
let news2 = document.querySelector('.news2')
let news3 = document.querySelector('.news3')
let news4 = document.querySelector('.news4')

let more1 = document.querySelector('.more')
let more2 = document.querySelector('.more2')
let more3 = document.querySelector('.more3')
let more4 = document.querySelector('.more4')

function none() {
    newsall.style.display = 'none'
}
more1.addEventListener('click', function () {
    news1.style.zIndex = '2'
    newsall.style.display = 'block'
})
more2.addEventListener('click', function () {
    news2.style.zIndex = '2'
    newsall.style.display = 'block'
})
more3.addEventListener('click', function () {
    news3.style.zIndex = '2'
    newsall.style.display = 'block'
})
more4.addEventListener('click', function () {
    news4.style.zIndex = '2'
    newsall.style.display = 'block'
})
newsall.addEventListener('click', none)

let banner = document.querySelector('.banner')
console.dir(banner)