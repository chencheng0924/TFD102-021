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

// 登入表單
let login = document.querySelector('.fa-user-circle')
let loginform = document.querySelector('.dialog')
let dialog1 = document.querySelector('.dialog1')
let wrong = document.querySelector('.wrong')
let gohigh = document.querySelector('gohigh')

function disppear() {
    loginform.style.display = 'none'
}

function moveend() {
    if (scrollY > 0) {
        loginform.style.display = 'none'
    }
}
login.addEventListener('click', function(e) {
    e.preventDefault()
    dialog1.classList.add('abs')
    loginform.style.display = 'flex'
})
wrong.addEventListener('click', disppear)
document.addEventListener('scroll', moveend)

let signupbtn = document.querySelector('.signupbtn')
let signinbtn = document.querySelector('.signinbtn')
let signinside = document.querySelector('.signinside')
    // let createacside = document.querySelector('.createacside')
let signin = document.querySelector('.signin')
    // let createac = document.querySelector('.createac')
let signinsideh2 = document.querySelector('.signinside h2')
let signinsidep = document.querySelector('.signinside p')

function signinback() {
    signinside.style.transform = 'translateX(0px)'
    signinbtn.style.display = 'block'
    signinsideh2.textContent = 'Hello,Friend!'
    signinsidep.textContent = 'Enter your personal details and start journey with us'

}
signupbtn.addEventListener('click', signinback)

function signinmove() {
    signinside.style.transform = 'translateX(600px)'
    signinbtn.style.display = 'none'
    signinsideh2.textContent = 'Welcome Back!'
    signinsidep.textContent = 'To keep connected with us please login whit your peasonal info'

}
signinbtn.addEventListener('click', signinmove)

let nav2bar = document.querySelector('.icon1 .fa-user')
let nav2barclose = document.querySelector('.wrong2')
let nav2 = document.querySelector('.bigloginform')
nav2bar.addEventListener('click', function() {
    nav2.style.display = 'flex'
})
nav2barclose.addEventListener('click', function() {
    nav2.style.display = 'none'
})
document.addEventListener('scroll', function() {
        if (scrollY > 0) {
            nav2.style.display = 'none'
        }
    })
    // 第二顆漢堡導覽列
let signup1 = document.querySelector('.s1 a')
let signin1 = document.querySelector('.s2 a')
let loginformtxt = document.querySelector('.loginformtxt')
let loginform2 = document.querySelector('.loginform2')
console.log(signup1)
console.log(signin1)

signup1.addEventListener('click', function() {
    loginformtxt.style.opacity = '0'
    loginformtxt.style.zIndex = '-1'
    setTimeout(function() {
        loginform2.style.opacity = '1'
        loginform2.style.zIndex = '1'
    }, 500)

})
signin1.addEventListener('click', function() {
    loginform2.style.opacity = '0'
    loginform2.style.zIndex = '-1'
    setTimeout(function() {
        loginformtxt.style.opacity = '1'
        loginformtxt.style.zIndex = '1'
    }, 500)
})