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
console.dir(signinsideh2)

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

let nav2bar = document.querySelector('.nav .fa-user')
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


// 場館照片滑入

let studio21 = document.querySelector('.studio2')
let studioimg = document.querySelector('.studio-img')
document.addEventListener('scroll', function() {
    if (scrollY > 400) {
        studio21.classList.add('studio21')
        studioimg.classList.add('studio21')
    }
})

// 產品圖放大縮小

let suplist = document.querySelector('.sup');
let gearlist = document.querySelector('.gear');
suplist.addEventListener('mouseover', function() {
    suplist.style.transform = 'scale(1.1)';
    gearlist.style.transform = 'scale(0.8)';
})
gearlist.addEventListener('mouseover', function() {
    suplist.style.transform = 'scale(0.8)';
    gearlist.style.transform = 'scale(1.1)';
})
suplist.addEventListener('mouseleave', function() {
    suplist.style.transform = 'scale(1)';
    gearlist.style.transform = 'scale(1)';
})
gearlist.addEventListener('mouseleave', function() {
    suplist.style.transform = 'scale(1)';
    gearlist.style.transform = 'scale(1)';
})

// 漢堡導覽列
// let hambarback = document.querySelector('.hambarback')
// let hambar = document.querySelector('.hambar')
// let hambarmove = document.querySelector('.fa-bars')
// hambarmove.addEventListener('click', function() {
//     hambar.classList.add('hambarnavmove')
//     hambar.style.display = 'block'
// })
// hambarback.addEventListener('click', function() {
//     // hambar.classList.add('hambarnavback')
//     hambar.style.display = 'none'
// })

// 漢堡導覽列
let newnavmove = document.querySelector('.fa-bars')
let newnavback = document.querySelector('.newnavback')
let navbar1 = document.querySelector('.navbar1')
let newnav = document.querySelector('.newnav')
let newnav1 = document.querySelector('.newnav1')
newnavmove.addEventListener('click', function() {
    newnav1.classList.add('active')
    navbar1.style.transform = 'scale(35)'
    navbar1.style.zIndex = '2'
    navbar1.style.opacity = '1'

    newnav.style.zIndex = '3'
    newnavback.style.zIndex = '3'

    // setTimeout(function() {
    newnavback.style.opacity = '1'
    newnav.style.opacity = '1'
        // }, 1000)

})

newnavback.addEventListener('click', function() {
    navbar1.style.transform = 'scale(0)'
    newnavback.style.opacity = '0'
    newnav.style.opacity = '0'
    setTimeout(function() {
        newnavback.style.zIndex = '-2'
        newnav.style.zIndex = '-2'
    }, 100)
    newnav1.classList.remove('active')

})
document.addEventListener('scroll', function() {
    if (scrollY > 0) {
        navbar1.style.transform = 'scale(0)'
        newnavback.style.opacity = '0'
        newnav.style.opacity = '0'
        setTimeout(function() {
            newnavback.style.zIndex = '-2'
            newnav.style.zIndex = '-2'
        }, 1000)
    }
})

// loading動畫
let wavyall = document.querySelector('.wavyall')
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        wavyall.style.opacity = '0'
        wavyall.style.visibility = 'hidden'
    }, 2000)
    setTimeout(function() {
        wavyall.style.zIndex = '-100'
    }, 3000)


})