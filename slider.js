$(document).ready(function () {

  var slider = tns({
    container: '.slider',
    fixedWidth: 200,
    controlsContainer: ".slider-controls",
    mouseDrag: true,
    loop: true,
    nav: false,
    gutter: 90,
  });

  $('[data-toggle="tooltip"]').tooltip()

})

