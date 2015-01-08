function isMobile() {
  //width taken from bootstrap variable: "$screen-sm"
  if(window.innerWidth <= 768) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  if (!Modernizr.touch) {
    $(window).stellar();
    $('.headshots li').tooltip();
  } else {
    $.each($('.headshots li'), function() {
      $head = $(this);
      title = '<div class="head-title">' + this.title + '</div>'
      $head.append(title);
    });
  };

  $(window).resize(function(){
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

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
