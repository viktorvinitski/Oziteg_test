const navbar = document.querySelector('.navbar')
const dropdownMenu = document.querySelector('.dropdown__menu')
const navbarItem1 = document.querySelector('.navbar__item1')
const navbarItem2 = document.querySelector('.navbar__item2')

navbarItem1.onmouseover = function(){
    document.querySelector('.dropdown__menu').style.display = 'block'
    const dropItems = document.querySelector('.dropdown__menu-wrapper').children
    for(let item of dropItems){
        item.style.display = 'none'
    }
    document.querySelector('.drop__items1').style.display = 'flex'
    document.querySelector('.content').style.backgroundColor = 'rgba(0, 0, 0, .5)'
}

navbarItem2.onmouseover = function(){
    document.querySelector('.dropdown__menu').style.display = 'block'
    const dropItems = document.querySelector('.dropdown__menu-wrapper').children
    for(let item of dropItems){
        item.style.display = 'none'
    }
    document.querySelector('.drop__items2').style.display = 'flex'
    document.querySelector('.content').style.backgroundColor = 'rgba(0, 0, 0, .5)'
}

dropdownMenu.onmouseover = function(){
    document.querySelector('.dropdown__menu').style.display = 'block'
    document.querySelector('.content').style.backgroundColor = 'rgba(0, 0, 0, .5)'
}

dropdownMenu.onmouseout = function(){
    document.querySelector('.dropdown__menu').style.display = 'none'
    document.querySelector('.content').style.backgroundColor = '#fff'
}



let burgerButton = document.querySelector('.navbar__burger')
let burgerClose = document.querySelector('.navbar__close')
let isOpenBurger = false

burgerButton.onclick = burgerClose.onclick = function() {
    if(!isOpenBurger){
        document.querySelector('.mobile__navbar').style.display = 'block'
        document.querySelector('.content').style.backgroundColor = 'rgba(0, 0, 0, .5)'
        document.querySelector('.navbar__burger').style.display = 'none'
        document.querySelector('.navbar__close').style.display = 'block'
        isOpenBurger = !isOpenBurger
    }
    else{
        document.querySelector('.mobile__navbar').style.display = 'none'
        document.querySelector('.content').style.backgroundColor = '#fff'
        document.querySelector('.navbar__burger').style.display = 'block'
        document.querySelector('.navbar__close').style.display = 'none'
        isOpenBurger = !isOpenBurger
    }

}


let acc = document.getElementsByClassName("accordion");
let subAcc = document.getElementsByClassName("subAcc");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

for (let i = 0; i < subAcc.length; i++) {
    subAcc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let subPanel = this.nextElementSibling;
        if (subPanel.style.display === "block") {
            subPanel.style.display = "none";
        } else {
            subPanel.style.display = "block";
        }
    });
}
