let txtmove = document.querySelector('.txttitleh42')
let txtback = document.querySelector('.txttitleh41')
let txt = document.querySelectorAll('.txt')
console.dir(txt[0])
let a = 0
let b = txt[0].offsetWidth
let c = txt.length
console.log(txtmove)
console.log(txt[0].scrollWidth)

function move(e) {
    e.preventDefault()
    a = a - b
    for (i = 0; i < txt.length; i++) {
        txt[i].style.transform = `translateX(${a}px)`
        if (a < -(b * c - 16)) {
            txt[i].style.transform = 'translateX(0px)'
            a = 0
        }
    }
}
txtmove.addEventListener('click', move)

function back(e) {
    e.preventDefault()
    a = a + b
    for (i = 0; i < txt.length; i++) {
        txt[i].style.transform = `translateX(${a}px)`
        if (a >= 0) {
            txt[i].style.transform = 'translateX(0px)'
            a = 0
        }
    }
}
txtback.addEventListener('click', back)