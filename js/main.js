// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';

const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}




//Deal of the Week

const daysE1 = document.querySelector("#days");
const hoursE1 = document.querySelector("#hours");
const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");

const newYears = " 2";

const date = new Date();
const l = date.getDate()+3;
console.log(l);

function countDown(){
    // const newYearsDate = new Date(l);
    // console.log(newYearsDate);
    const currentDate = new Date();
    // const lal = currentDate.getDate();
    // console.log(lal);
    
    console.log();
    const totalSeconds = (l - currentDate)/1000;
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
// countDown();
// setInterval(countDown,1000);




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


// $(document).ready(function () {
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();

//       var target = this.hash,
//           $target = $(target);

//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top - 80
//       }, 900, 'swing', function () {
//           window.location.hash = target;
//       });
//   });
// });
