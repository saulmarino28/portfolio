
$(document).ready(function() {
	console.log("Hola");
  $.get('paginas/portfolio_es.html', function(res) {
    //console.log(res);
    $('#pagina').empty().append(res);

  });
});
$(document).on('click', '#prueba', function(e) {
    //console.log("Hola");
    e.preventDefault();
    var idioma = $('#idioma option:selected').val();
    console.log(idioma);

    if(idioma == 'es') {
        $.get('paginas/portfolio_es.html', function(res) {
            //console.log(res);
            $('#pagina').empty().append(res);
        });   
    }
    if(idioma == 'en') {
         $.get('paginas/portfolio_en.html', function(res) {
            //console.log(res);
            $('#pagina').empty().append(res);
        });
    }
});


/*var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
});

//var exampleEl = document.getElementById('icon');
//var tooltip = new bootstrap.Tooltip(exampleEl, options); */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
