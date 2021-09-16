
$(document).ready(function() {
	console.log("Hola");

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
