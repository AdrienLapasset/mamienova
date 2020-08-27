$(document).ready(function () {

  var slider = tns({
    container: '.slider',
    autoWidth: true,
    controlsContainer: ".slider-controls",
    mouseDrag: true,
    loop: true,
    nav: false,
    gutter: 90,
  });

  $('[data-toggle="tooltip"]').tooltip()

})

