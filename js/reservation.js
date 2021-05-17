let txtmove = document.querySelector('.txttitleh42')
let txtback = document.querySelector('.txttitleh41')
let txt = document.querySelectorAll('.txt')
console.log(txt)
let a = 0
console.log(txtmove)
function move(e) {
    e.preventDefault()
    a = a - 1200
    for (i = 0; i < txt.length; i++) {
        txt[i].style.transform = `translateX(${a}px)`
        if (a < -3599) {
            txt[i].style.transform = 'translateX(0px)'
            a = 0
        }
    }
}
txtmove.addEventListener('click', move)

function back(e) {
    e.preventDefault()
    a = a + 1200
    for (i = 0; i < txt.length; i++) {
        txt[i].style.transform = `translateX(${a}px)`
        if (a >= 0) {
            txt[i].style.transform = 'translateX(0px)'
            a = 0
        }
    }
}
txtback.addEventListener('click', back)