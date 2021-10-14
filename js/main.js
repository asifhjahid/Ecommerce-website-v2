// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';

const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
  navList.addEventListener('click', ()=>{
    navList.classList.remove('open')
 })
}


// const navOpen = document.querySelector('.navHamburger');
// const navClose = document.querySelector('.closeToggle');
// const menu = document.querySelector('.navMenu');
// const navContainer = document.querySelector('.navMenu');


// navOpen.addEventListener('click',()=>{
//     menu.classList.add('open');
//     document.body.classList.add('active');
//     navContainer.style.left="0";
//     navContainer.style.width="26rem";
// })
// navClose.addEventListener('click',()=>{
//     menu.classList.remove('open');
//     document.body.classList.remove('active');
//     navContainer.style.left="-30rem";
//     navContainer.style.width="0";
// })




//Deal of the Week

const daysE1 = document.querySelector("#days");
const hoursE1 = document.querySelector("#hours");
const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");

const startingTime = '1 january 2021';

function countDown(){
    const getStartingTime = new Date(startingTime);
    const currentDate = new Date();
    
    const totalSeconds = (  currentDate - getStartingTime)/1000;
    
    console.log(totalSeconds);
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minutesE1.innerHTML = minutes;
    secondsE1.innerHTML = seconds;

   
}

//initial call
countDown();
setInterval(countDown,1000);




// Customer Reviews

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false
  }
});



