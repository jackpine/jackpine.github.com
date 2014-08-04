$(function() {
  $(window).stellar();

  $('body').panelSnap({
    panelSelector: '.full_page',
    $menu: '.nav-bar',
  });

  $('.headshots li').tooltip();

  function resizeWindow() {
   // background image aboslutely centered and full bleed
   var backgrounds = $(".bg"),
       $window = $(window);

   backgrounds.each( function() {
     var $bg = $(this);
     aspectRatio = $bg.width() / $bg.height();

      if ( ($window.width() / $window.height()) < aspectRatio ) {
        $bg.removeClass('bgwidth').addClass('bgheight');
        $bg.css({ marginLeft: -($bg.width()/2 - $(window).width()/2) });
      } else {
        $bg.removeClass('bgheight').addClass('bgwidth');
        $bg.css({ marginLeft: 0 });
      }
   });
  }

  function centerElement() {
    // centered class absolutely centered
    var $centered = $(".centered");
    $centered.css({
      marginLeft: -($centered.width()/2),
      marginTop:  -($centered.height()/2)
    });
    console.log('element centered');
  }

  $(window).resize(resizeWindow);

});
