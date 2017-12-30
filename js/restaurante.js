//
$(function() {
  var $filtrarRestaurant = $('#filtrarRestaurant');
  var $imagesRestaurant = $('div.imagesRestaurant');
  $.each(data, function(district, restaurant) {
    if ($filtrarRestaurant.val() === district) {
      $('h2').text(key);
      var listaRestaurante = data[district];
      for (var i = 0; i < Object.keys(listaRestaurante).length; i++) {
        $imagesRestaurant.addClass('style-restaurant').eq(i).text(Object.keys(listaRestaurante)[i]);
      }
    };
  });
});

