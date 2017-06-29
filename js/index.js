$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
margin: 15,
    items:1,
    nav: true,
    autoHeight: true,
    loop:false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    loop:true,
    video:true,
        lazyLoad:true,
        center:true,
    responsiveClass:true,
    responsive:{
        480:{
                items:1
            },
            600:{
                items:1
            }
    }
});
});