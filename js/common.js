$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		margin: 10,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
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
});

	//------------------    menu scroll    -------------------------------

	/*
	$('.top_menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-30},800);
		return false;
	});
	*/
