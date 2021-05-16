let list = document.querySelectorAll('.product1')
document.addEventListener('scroll', () => {
    if (scrollY > 200) {
        list[0].style.transform = 'translateX(0%)'
    }
    if (scrollY > 600) {
        list[1].style.transform = 'translateX(0%)'
    }
    if (scrollY > 1000) {
        list[2].style.transform = 'translateX(0%)'
    }
})
let list2 = document.querySelectorAll('.product2')
document.addEventListener('scroll', function () {

    if (scrollY > 400) {
        list2[0].style.transform = 'translateX(0%)'
    }
    if (scrollY > 800) {
        list2[1].style.transform = 'translateX(0%)'
    }
})

// 購物車
let allproduct = [
    {
        image: './img/lifting/TJ2.PNG',
        h2: '傳統拉力帶',
        price: 580,
    },
    {
        image: './img/lifting/TJ4.PNG',
        h2: '健身彈力帶',
        price: 880
    },
    {
        image: './img/lifting/TJ1.PNG',
        h2: '牛皮健美腰帶',
        price: 1680
    },
    {
        image: './img/lifting/TJ5.PNG',
        h2: '翹臀圈訓練帶',
        price: 880
    },
    {
        image: './img/lifting/TJ3.PNG',
        h2: '輕便防滑硬舉鞋',
        price: 1080
    }
]
let shopcarall = document.querySelector('.shopcarall')
let shopcar = document.querySelector('.shopcar')
let shopbtn = document.querySelectorAll('.check a')
let product = []
let totalprice = document.querySelector('.totalprice')
let select = document.querySelectorAll('main select')

shopbtn.forEach((li) => {
    li.addEventListener('click', function (e) {
        e.preventDefault()
        let target_product = e.target.parentElement.parentElement.parentElement.children[0].textContent
        let index = product.findIndex((p) => {
            return p.newh2 == target_product
        })
        let target_size = e.target.parentElement.parentElement.parentElement.children[2].children[0].value

        allproduct.forEach((x) => {
            if (index == -1) {
                if (x.h2 == target_product) {
                    let newpage = {
                        newimage: x.image,
                        newh2: x.h2,
                        newprice: x.price,
                        newnum: 1,
                        size: `SIZE:${target_size}`
                    }
                    product.push(newpage)
                }
            }
            else if (index !== -1) {
                product.forEach((c) => {
                    if (x.h2 == target_product && c.size !== `SIZE:${target_size}`) {
                        console.log(c.size)
                        console.log(c)
                        console.log('hi')
                        let newpage = {
                            newimage: x.image,
                            newh2: x.h2,
                            newprice: x.price,
                            newnum: 1,
                            size: `SIZE:${target_size}`
                        }
                        product.push(newpage)
                    }
                })
            }
            else {
                product[index].newnum++
                product[index].newprice += product[index].newprice
            }
        })
        let str = ''
        product.forEach((q) => {
            str += `<div class="shopcarp">
            <div class="productimg"><img src="${q.newimage}"></div>
                <div><h2>${q.newh2}</h2>
                <div class="size123">${q.size}</div>
                <div class="productprice">
                <p>${q.newnum}</p>
                <p>X</p>
                <p>${q.newprice}</p>
                <i class="fas fa-trash-alt"></i></div>
                </div>
                </div>
                `
        })
        shopcar.innerHTML = str
        // allproduct.forEach((x) => {
        //     if (index == -1) {
        //         if (x.h2 == target_product) {
        //             let newpage = {
        //                 newimage: x.image,
        //                 newh2: x.h2,
        //                 newprice: x.price,
        //                 newnum: 1,
        //                 size: `SIZE:${target_size}`
        //             }
        //             product.push(newpage)
        //         }
        //     }
        //     else if (index !== -1) {
        //         product.forEach((c) => {
        //             if (x.h2 == target_product && c.size !== `SIZE:${target_size}`) {
        //                 console.log(c.size)
        //                 console.log(c)
        //                 console.log('hi')
        //                 let newpage = {
        //                     newimage: x.image,
        //                     newh2: x.h2,
        //                     newprice: x.price,
        //                     newnum: 1,
        //                     size: `SIZE:${target_size}`
        //                 }
        //                 product.push(newpage)
        //             }
        //         })
        //     }
        //     else {
        //         product[index].newnum++
        //         product[index].newprice += product[index].newprice
        //     }
        // })
        // let str = ''
        // product.forEach((q) => {
        //     str += `<div class="shopcarp">
        //     <div class="productimg"><img src="${q.newimage}"></div>
        //         <div><h2>${q.newh2}</h2>
        //         <div class="size123">${q.size}</div>
        //         <div class="productprice">
        //         <p>${q.newnum}</p>
        //         <p>X</p>
        //         <p>${q.newprice}</p>
        //         <i class="fas fa-trash-alt"></i></div>
        //         </div>
        //         </div>
        //         `
        // })
        // shopcar.innerHTML = str

        let str2 = ''
        let total = 0
        product.forEach((v) => {
            total += v.newprice
        })
        str2 += `<div>Total:NT$${total}</div>`
        totalprice.innerHTML = str2

        let str3 = ''
        let str4 = ''
        let total123 = 0
        let deletei = document.querySelectorAll('.productprice i')
        console.log(product)
        deletei.forEach((di) => {
            di.addEventListener('click', function (y) {
                let dproducth2 = y.target.parentElement.parentElement.children[0].textContent
                let dproductsize = y.target.parentElement.parentElement.children[1].textContent
                product.forEach((si) => {
                    if (si.newh2 == dproducth2 && si.size == dproductsize) {
                        let index1 = product.findIndex((ni) => {
                            return ni.newh2 == dproducth2
                        })
                        product.splice(index1, 1)

                        product.forEach((q) => {
                            str3 += `<div class="shopcarp">
                        <div class="productimg"><img src="${q.newimage}"></div>
                        <div><h2>${q.newh2}</h2>
                        <div class="size123">${q.size}</div>
                        <div class="productprice">
                        <p>${q.newnum}</p>
                        <p>X</p>
                        <p>${q.newprice}</p>
                        <i class="fas fa-trash-alt"></i></div>
                        </div>
                        </div>
                        `
                        })
                        shopcar.innerHTML = str3
                    }
                })
                product.forEach((k) => {
                    total123 += k.newprice
                })
                str4 += `<div>Total:NT$${total123}</div>`
                totalprice.innerHTML = str4
            })
        })

        shopcarall.style.transform = 'translateX(0%)'
    })
})
