window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "red";
  
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "rgb(148, 214, 238)";
  }
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



// Pop Up Section

// const popup = document.querySelector('.popup');
// const closePopup = document.querySelector('.popup__close');

// if(popup){
//     closePopup.addEventListener('click',()=>{
//         popup.classList.add('hide__popup');
//     });

//     window.addEventListener('load',()=>{
//         setInterval(()=>{
//             popup.classList.remove('hide__popup');
//         },3000)
//     })

// }





//Fixed Navigation


const navBar = document.querySelector('.navigation');
const gotoTop = document.querySelector('.goto-top');
const scrollLink = document.querySelector('.scroll-link');

// Smooth Scroll

Array.from(scrollLink).map(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains('fix__nav');
        let position = element.offsetTop - navHeight;
        
       if(!fixNav){
           position = position - navHeight;
       }
       window.scrollTo({
           left: 0,
           top: position,
       });
       navContainer.style.left = '-30rem';
       document.body.classList.remove('active');
    })
});





//Fix NavBar

window.addEventListener('scroll',(e)=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add('fix__nav');
    }else{
        navBar.classList.remove('fix__nav');
    }
    if(scrollHeight > 300){
        gotoTop.classList.add('show-top');
    }else{
        gotoTop.classList.remove('show-top');
    }
})





























//AOS
AOS.init();