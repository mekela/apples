$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//toggle menu
	$( ".menu_trigger" ).click(function() {
	  $( this ).next('ul').slideToggle('fast');
	});
});