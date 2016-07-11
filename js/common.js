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


	//------------------    menu scroll    -------------------------------

	/*
	$('.top_menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-30},800);
		return false;
	});
	*/
