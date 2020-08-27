$(document).ready(function () {

  $('[data-toggle="tooltip"]').tooltip()

  $("#choco-moods").submit(function (event) {
    var chocoMoods = document.getElementsByName('choco-mood');
    for (var i = 0, length = chocoMoods.length; i < length; i++) {
      if (chocoMoods[i].checked) {
        window.location.replace(chocoMoods[i].value + '.html');
        break;
      }
    }
    event.preventDefault();
  });


})

