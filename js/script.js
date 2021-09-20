


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    let navBar = document.getElementById("navbar");
    let navItem = document.querySelectorAll(".nav-link");
    for(let i =0; i<navItem.length ; i++){
        let item = navItem[i];
        item.style.color = '#ffffff'
    }
    navBar.style.top = '0';
    navBar.style.backgroundColor = '#27ae60'; 
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#fff";
    let navItem = document.querySelectorAll(".nav-link");
    for(let i =0; i<navItem.length ; i++){
        let item = navItem[i];
        item.style.color = '#000'
    }
  }
}



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