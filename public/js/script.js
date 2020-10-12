$(document).ready(function(){
 /*Mobile-nav */

  $('.js--nav-icon').click(function(){
   var nav=  $('.js--main-nav');
   var icon = $('.js--nav-icon i');

   nav.slideToggle(200);
   if(icon.hasClass('fas fa-bars')){

        icon.addClass('far fa-calendar-times');
        icon.removeClass('fas fa-bars');
   }else{
        icon.addClass('fas fa-bars');
        icon.removeClass('far fa-calendar-times');
   }
})


});