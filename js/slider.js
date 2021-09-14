// Glide Js Carousel

const slider1 = document.querySelector('#glide-1');


//Hero 

if(slider1){
    new Glide(slider1,{
        type:"carousel",
        startAt:0,
        autoplay:3000,
        hoverpause:true,
        preView:1,
        animationDuration:800,
        animationTimingFunc:'linear',
    }).mount();
}
