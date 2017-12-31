// Slider
$((function() {
  $('.myCarousel').carousel({
    interval: 1000
  });
})

/*Accediendo a la data*/
$(function() {
  var $filtrarRestaurant = $('#filtrarRestaurant');
  var $imagesRestaurant = $('div.restaurant-container');
   $.each(data, function(district) {
    if ($filtrarRestaurant.val() === district) {
      $('h2').text(key);
      var listaRestaurante = data[district];
      for (var i = 0; i < Object.keys(listaRestaurante).length; i++) {
        $imagesRestaurant.addClass('style-restaurant').eq(i).text(Object.keys(listaRestaurante)[i]);
      }
    };
  });
});


