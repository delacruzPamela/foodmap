// Slider de header
$(function() {
  $('.myCarousel').carousel({
    interval: 1000
  });

  /* ACCEDIENDO A LA DATA 
  ---------------------------------------------------------------------------------- */
  // Creando contenedor para mostrar todos los restaurantes ezistentes de la data
  function construirDivLocal(district) {
    $.each(data[district], function(nombreLocal) {
      var imagen = data[district][nombreLocal].logo;
      // var restaurantContainer = "<div class='restaurant-info collection col-xs-12 col-md-3'><a data-distrito='" + district + "' data-local= '" + nombreLocal + "' href ='#' data-toggle ='modal' data-target = '#infoModal'> <span class='caption'><span>" + nombreLocal + "</span><img class='center-block' src=' "+ imagen + "' alt='Info'></span></a></div>";
      var restaurantContainer = "<div class='restaurant-info collection col-xs-12 col-md-3'><a data-distrito='" + district + "' data-local= '" + nombreLocal + "' href ='#' data-toggle ='modal' data-target = '#infoModal'> <span class='caption'><span>" + nombreLocal + "</span><img class='center-block' src=' "+ imagen + "' alt='Info'></span></a></div>";
      // var restaurantContainer = "<div class='restaurant-info collection col-xs-12 col-md-6'><a data-distrito='' + district + "' data-local= '" + nombreLocal + "' href ='#' data-toggle ='modal' data-target ='#infoModal'><div class='data'><p><strong>Restaurant El Charapito</strong></p><p>Jirón Ayacucho 198</p><p>Abierto hasta las 19:00</p></div><div class='photo-restaurant'></div></a></div>";
      $('#list-restaurant .row .restaurant-container').append(restaurantContainer);
    });
  };

  // Función que muestra todos los restaurantes en la web-app
  var restaurants = Object.keys(data);
  // console.log(restaurants);
  function allRestaurants() {
    $.each(data, function(district) {
      construirDivLocal(district);
    });
  };
  allRestaurants();

  // Función que filtra los restaurantes segun el distrito que se digite en el input
  var txtDistrict = $('#txtDistrito');
  txtDistrict.keyup(function() {
    $('#list-restaurant .row .restaurant-container').empty();
    $.each(data, function(district) {
      var tmpDistric = district.toLowerCase();
      if (tmpDistric.includes(txtDistrict.val().toLowerCase())) {
        construirDivLocal(district);
      }
    });
  });
});