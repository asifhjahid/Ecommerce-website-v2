// Glide Js Carousel

const slider1 = document.querySelector('#glide-1');
const slider2 = document.querySelector('#glide_2')

//Hero 

if(slider1){
    new Glide(slider1,{
        type:"carousel",
        startAt:0,
        autoplay:3000,
        hoverpause:true,
        perView:1,
        animationDuration:800,
        animationTimingFunc:'linear',
    }).mount();
}



// Latest Products Section

if(slider1){
    new Glide(slider2,{
        type:"carousel",
        startAt:0,
        autoplay:2000,
        hoverpause:true,
        perView:4,
        animationDuration:800,
        animationTimingFunc:'cubic-bezier(.165,.840,.44,.1)',
        breakpoints:{
            1200:{
                perView:3,
            },
            768:{
                perView:2,
            },
        },
    }).mount();
}
