// 創建一個購物車陣列
let allproduct = [{
    Image: '../img/supplement/on.jpg',
    h2: 'ON金牌乳清蛋白(雙倍巧克力)',
    price: 1880
}, {
    Image: '../img/supplement/tryall.jpg',
    h2: 'Tryall 全分離乳清蛋白 (35g/包) 綠豆沙牛奶',
    price: 1980
}, {
    Image: '../img/supplement/allin.jpeg',
    h2: 'allin乳清-100%分離式乳清',
    price: 1380
}, {
    Image: '../img/supplement/mars.jpg',
    h2: '戰神低脂乳清蛋白',
    price: 2280
}, {
    Image: '../img/supplement/myprotein.webp',
    h2: 'Myprotein 濃縮乳清蛋白',
    price: 1580
}, {
    Image: '../img/supplement/tryall2.jpg',
    h2: 'Tryall 濃縮乳清蛋白(500g/袋) 經典奶茶',
    price: 350
}, {
    Image: '../img/supplement/creatine.jpg',
    h2: 'ON 肌酸 (1200g/罐)',
    price: 1100
}, {
    Image: '../img/supplement/bcaa.jpg',
    h2: '黃金 BCAA 支鏈胺基酸粉',
    price: 1280
}, {
    Image: '../img/supplement/v.jpg',
    h2: 'Myprotein綜合維他命',
    price: 880
}, {
    Image: '../img/supplement/pbar1.jpg',
    h2: 'Myprotein巧克力棉花糖高蛋白棒',
    price: 1380
}, {
    Image: '../img/supplement/pbar2.jpg',
    h2: 'Myprotein高蛋白方塊燕麥棒',
    price: 1580
}, {
    Image: '../img/supplement/pcp.jpg',
    h2: 'Myprotein高蛋白美式煎餅粉',
    price: 980
}
]
let shopcarbtn = document.querySelectorAll('.product i')
let shoppingcar = document.querySelector('.shoppingcar')
let car = document.querySelector('.car')
let supcheck1 = document.querySelector('.supcheck1')
let shoppcar = []

shopcarbtn.forEach((li) => {
    li.addEventListener('click', function (w) {
        w.preventDefault()
        console.log(w)
        let target_product = w.target.parentElement.parentElement.children[1].textContent
        let index = shoppcar.findIndex((li) => {
            return li.newh2 == target_product
        })
        console.log(index)
        if (index == -1) {
            allproduct.forEach((p) => {
                if (p.h2 == target_product) {
                    let newpage = {
                        newimage: p.Image,
                        newh2: p.h2,
                        newprice: p.price,
                        newnum: 1
                    }
                    shoppcar.push(newpage)
                }
            })
        }
        else {
            shoppcar[index].newnum++
            shoppcar[index].newprice += shoppcar[index].newprice
        }
        let str = ''
        shoppcar.forEach((x) => {
            str += `<div class="supercar">
            <div><img src="${x.newimage}"></div> 
            <div><h2>${x.newh2}</h2> 
            <div class="superprice">
            <p>${x.newnum}</p>
            <p>X</p>
            <p>NT$${x.newprice}</p>
            <i class="fas fa-trash-alt"></i></div>
            </div>  
            </div>`
        })
        console.log(str)
        car.innerHTML = str


        let total = 0
        let str2 = ''
        shoppcar.forEach((q) => {
            total += q.newprice
            console.log(total)
            str2 = `<div>Total:NT$${total}<div>`
        })
        supcheck1.innerHTML = str2


        let str3 = ''
        let str4 = ''
        let total123 = 0
        let deletei = document.querySelectorAll('.superprice i')
        console.log(deletei)
        deletei.forEach((di) => {
            di.addEventListener('click', function (s) {
                let dproduct = s.target.parentElement.parentElement.children[0].textContent
                shoppcar.forEach((x) => {
                    if (dproduct == x.newh2) {
                        let index1 = shoppcar.findIndex((u) => {
                            return u.newh2 == dproduct
                        })
                        shoppcar.splice(index1, 1)
                        shoppcar.forEach((g) => {
                            str3 += `<div class="supercar">
                            <div><img src="${g.newimage}"></div> 
                            <div><h2>${g.newh2}</h2> 
                            <div class="superprice">
                            <p>${g.newnum}</p>
                            <p>X</p>
                            <p>NT$${g.newprice}</p>
                            <i class="fas fa-trash-alt"></i></div>
                            </div>  
                            </div>`
                        })
                        car.innerHTML = str3
                    }
                })
                console.log(shoppcar)
                shoppcar.forEach((g) => {
                    total123 += g.newprice
                    console.log(total123)
                })
                str4 = `<div>Total:NT$${total123}<div>`
                supcheck1.innerHTML = str4
                console.log(shoppcar)
            })
        })
        shoppingcar.style.transform = 'transXlate(0%)'
        shoppingcar.style.display = 'block'
    })
})



// shopcarbtn.forEach((li) => {
//     li.addEventListener('click', function (e) {
//         e.preventDefault()
//         let target_product = e.target.parentElement.parentElement.children[1].textContent;
//         let index = shoppcar.findIndex((li) => {
//             return li.newh2 == target_product
//         })
//         if (index == -1) {
//             allproduct.forEach(function (product) {
//                 if (target_product == product.h2) {
//                     let newshopcar = {
//                         newimage: product.Image,
//                         newh2: product.h2,
//                         newprice: product.price,
//                         newnum: 1
//                     }
//                     shoppcar.push(newshopcar)
//                     console.log(newshopcar)
//                 }
//             })
//         } else {
//             shoppcar[index].newnum++

//         }
//         let str = ''
//         shoppcar.forEach((p) => {
//             str += `<div><img src="${p.newimage}"></div> <p>${p.newh2}</p> <p>${p.newprice}</p> <p>${p.newnum}</p>`
//         })
//         shoppingcar.innerHTML = str
//         shoppingcar.style.transform = 'translateX(0%)'
//         shoppingcar.style.display = 'block'
//     })
// })

// 購物車
let shopcar = document.querySelector('.shoppingcar')
let shopcatbtn = document.querySelector('.fa-shopping-cart')
let toggleshopcar = false

function shopcargo() {
    if (toggleshopcar) {
        toggleshopcar = !toggleshopcar
        shoppingcar.style.transform = 'translateX(100%)'
        shoppingcar.style.display = 'none'
    } else {
        shoppingcar.style.transform = 'translateX(0%)'
        shoppingcar.style.display = 'block'
        toggleshopcar = !toggleshopcar
    }
}
shopcatbtn.addEventListener('click', shopcargo)


// 側邊選單
let aside1 = document.querySelector('.aside1')
let aside1go = true
let aside2 = document.querySelector('.aside2')
let aside2g0 = true
let aside3 = document.querySelector('.aside3')
let aside3go = true

let asidei1 = document.querySelector('.asidei1 i')
let asidei2 = document.querySelector('.asidei2 i')
let asidei3 = document.querySelector('.asidei3 i')


asidei1.addEventListener('click', function () {
    if (aside1go) {
        aside1.style.display = 'block'
        aside1.classList.add('abs')
        aside1go = !aside1go
    } else {
        aside1.style.display = 'none'
        aside1.classList.remove('abs')
        aside1go = !aside1go
    }

})
asidei2.addEventListener('click', function () {
    if (aside2g0) {
        aside2.style.display = 'block'
        aside2.classList.add('abs')
        aside2g0 = !aside2g0
    } else {
        aside2.style.display = 'none'
        aside2.classList.remove('abs')
        aside2g0 = !aside2g0
    }
})
asidei3.addEventListener('click', function () {
    if (aside3go) {
        aside3.style.display = 'block'
        aside3.classList.add('abs')
        aside3go = !aside3go
    } else {
        aside3.style.display = 'none'
        aside3.classList.remove('abs')
        aside3go = !aside3go
    }
})

// 商品分類
let aside11 = document.querySelector('.aside11')
let aside12 = document.querySelector('.aside12')
let aside21 = document.querySelector('.aside21')
let aside22 = document.querySelector('.aside22')
let aside23 = document.querySelector('.aside23')
let aside31 = document.querySelector('.aside31')
let aside32 = document.querySelector('.aside32')
let product = document.querySelectorAll('.product h4')
let asidei0 = document.querySelector('.asidei0 a')
let productall = document.querySelectorAll('.product1')

asidei0.addEventListener('click', function (e) {
    e.preventDefault()
    productall.forEach(function (value) {
        value.style.display = 'block'
    })
})

function search(proteintype) {
    product.forEach(function (value) {
        if (value.textContent == proteintype) {
            console.log(value)
            value.parentElement.style.display = 'block'
        }
        else if (value.textContent !== proteintype) {
            value.parentElement.style.display = 'none'
        }
    })
}
aside11.addEventListener('click', function (e) {
    e.preventDefault()
    search('濃縮')
})
aside12.addEventListener('click', function (e) {
    e.preventDefault()
    search('分離')
})
aside21.addEventListener('click', function (e) {
    e.preventDefault()
    search('綜合維他命')
})
aside22.addEventListener('click', function (e) {
    e.preventDefault()
    search('肌酸')
})
aside23.addEventListener('click', function (e) {
    e.preventDefault()
    search('BCAA')
})
aside31.addEventListener('click', function (e) {
    e.preventDefault()
    search('蛋白棒')
})
aside32.addEventListener('click', function (e) {
    e.preventDefault()
    search('高蛋白料理')
})






































