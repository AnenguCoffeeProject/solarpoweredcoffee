$(document).ready(function (){

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Smooth scroll to anchors
  $('a.smoothScroll').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  // Toggle header on scroll
  var offset = $("#hero").outerHeight() - $("header").outerHeight();
  $( window ).resize(function() {
    offset = $("#hero").outerHeight() - $("header").outerHeight();
  });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > offset) {
      $("header").addClass("header-white");
    } else {
      $("header").removeClass("header-white");
    }
  });

  $('.menu').click(function(){
    $('nav ul').fadeToggle('slow');
  });

});
