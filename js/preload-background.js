function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    (new Image()).src = this;
  });
}

preload([
  'img/woodshop_background.jpg'
]);
