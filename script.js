let meaus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", function(){
    meaus.classList.add("active");
})


closeBtn.addEventListener("click", function(){
    meaus.classList.remove("active");
})


//header background

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop>20){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
})


//Card SLider




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    999:{
        slidesPerView: 3
    }
    ,
}

  });



  