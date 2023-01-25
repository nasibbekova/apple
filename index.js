let img = document.querySelector('.galerry_image')
let btns = document.querySelectorAll('.click')

btns.forEach((btn) =>{
    btn.onclick = () =>{
        if(btn.innerText === '.deep-purple'){
            img.setAttribute('src','./img/iphone-14-pro-finish-select-202209-6-1inch-silver.jpg')
        }else if(btn.innerText === '.gold'){
            img.setAttribute('src', './img/iphone-14-pro-finish-select-202209-6-1inch_AV1.jpg')
        }else if(btn.innerText === '.silver'){
            img.setAttribute ('src' , './img/iphone-14-pro-finish-select-202209-6-1inch_AV2_GEO_US.jpg')
        }else{
            img.setAttribute('src','./img/iphone-14-pro-finish-select-202209-6-1inch-spaceblack.jpg')
        }
    }
})

