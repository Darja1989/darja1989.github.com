$(document).ready(function(){
	$("a#single_image").fancybox();
	
	var image_bg = new Array('url(images/1.jpg)', 'url(images/2.jpg)', 'url(images/3.jpg)');
	$('#slide').css('background', image_bg[0]);
	setTimeout(slider,5000);
	
	function slider() {
	$('#slide').fadeOut(500, function(){
		$('#slide').fadeIn(500).css('background', image_bg[1]);
		});	
		setTimeout(slider1,5000);
	}
	
	function slider1() {
	$('#slide').fadeOut(500, function(){
		$('#slide').fadeIn(500).css('background', image_bg[2]);
		});
		setTimeout(slider2,5000);	
	}
	
	function slider2() {
	$('#slide').fadeOut(500, function(){
		$('#slide').fadeIn(500).css('background', image_bg[0]);
		});
		setTimeout(slider,5000);	
	}
	
	
});
