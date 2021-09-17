const navOpen = document.querySelector('.navHamburger');
const navClose = document.querySelector('.closeToggle');
const menu = document.querySelector('.navMenu');
const navContainer = document.querySelector('.navMenu');


navOpen.addEventListener('click',()=>{
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left="0";
    navContainer.style.width="26rem";
})
navClose.addEventListener('click',()=>{
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left="-30rem";
    navContainer.style.width="0";
})



// Pop Up Section

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

if(popup){
    closePopup.addEventListener('click',()=>{
        popup.classList.add('hide__popup');
    });

    window.addEventListener('load',()=>{
        setInterval(()=>{
            popup.classList.remove('hide__popup');
        },3000)
    })

}

























//AOS
AOS.init();