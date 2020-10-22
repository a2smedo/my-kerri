$(document).ready(function () {
  

  // Navbar changed when scroll
  var nav = $('nav');
  var navheight = nav.outerHeight();

  $(window).scroll(function () { 
    var top = window.scrollY;

    if (top > 3) {
      $(nav).addClass('nav-changed');
    } else {
      $(nav).removeClass('nav-changed');
    }
  });


   // for Changed paragraph animation used Type Js
   var typed = new Typed('#show', {
    strings: [
      "I'M Kerri Deo.",
      "I'M A Graphic Designer.",
      "I'M A Photographer.",
      "I'M A Web Designer.",
      "I'M A Frontend Developer.",
     
      ],
    typeSpeed: 100, 
    loop: true,
    backDelay: 1100,
    backSpeed: 60,
    smartBackspace: true 
  });

});