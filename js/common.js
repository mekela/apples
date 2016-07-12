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

	// falling_sakura
	if($(".falling_sakura").length) {
		$('.falling_sakura').sakura({ 
			blows: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'], // Horizontal movement animation names
			className: 'sakura', // Class name to use
			fallSpeed: 1, // Factor for petal fall speed
			maxSize: 24, // Maximum petal size
			minSize: 14, // Minimum petal size
			newOn: 300, // Interval after which a new petal is added
			swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
		});
	}	
	
	//slider
	$('.sert_slider ul').bxSlider({
	  minSlides: 1,
	  maxSlides: 4,
	  slideWidth: 240,
	  slideMargin: 35
	});

	
});

	