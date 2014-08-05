function isMobile() {
  //width taken from bootstrap variable: "$screen-sm"
  if(window.innerWidth <= 768) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  $(window).stellar();

  if(!isMobile()) {
    $('body').panelSnap({
      panelSelector: '.full_page',
      $menu: '.panel-nav',
    });
  }

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

  $(window).resize(function(){
    resizeWindow();
    $(window).stellar('refresh');
  });

  function renderThankYouForContacting(){
    var thankYouHeading = "Thanks for contacting us.";
    var thankYouText = "We'll get back to you shortly. Or give us a call to get a speedy response: " + "323.545.8755";
    $("#subheading").html(thankYouHeading);
    $("#tagline").html(thankYouText);
  }

  if(window.location.hash.substring(1) == "thank_you") {
    renderThankYouForContacting();
  }

});
