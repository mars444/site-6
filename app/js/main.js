$(function(){
    
    $('.home__slider').slick({
      nextArrow: '<button type="button" class="slick_button slick-next fa fa-chevron-right"><img src="images/next.svg" alt=""></button>' ,
      prevArrow: '<button type="button" class="slick_button slick-prev  fa fa-chevron-left"><img src="images/back.svg" alt=""></button>' ,
      autoplay: true,
      autoplaySpeed: 2000,
    
      });

      $('.ourmenu__slider').slick({
        nextArrow: '<button type="button" class="slick_button slick-next fa fa-chevron-right"><img src="images/next.svg" alt=""></button>' ,
        prevArrow: '<button type="button" class="slick_button slick-prev  fa fa-chevron-left"><img src="images/back.svg" alt=""></button>' ,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      
        });
        $( "#datepicker" ).datepicker();
  


});
