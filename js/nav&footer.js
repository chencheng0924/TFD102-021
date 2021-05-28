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

// 漢堡導覽列
let hambarback = document.querySelector('.hambarback')
let hambar = document.querySelector('.hambar')
let hambarmove = document.querySelector('.fa-bars')
hambarmove.addEventListener('click', function() {
    hambar.classList.add('hambarnavmove')
    hambar.style.display = 'block'
})
hambarback.addEventListener('click', function() {
    // hambar.classList.add('hambarnavback')
    hambar.style.display = 'none'
})