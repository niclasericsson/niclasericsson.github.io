$(document).ready(function() {

	$(".infoBox").on("click", function(){
		if($(this).height() < 450){
			$(this).height("450px");
			$(this).children(".projectInfo").css({"visibility": "visible"});
			$(this).children(".projectInfo").css({"opacity": 100});
		}
		else{
			$(this).height("110px");
			$(this).children(".projectInfo").css({"opacity": 0});
			$(this).children(".projectInfo").css({"visibility": "hidden"});
		}
	});
	
	$("#scrollDownImage").click(function() {
		$('html, body').animate({
			scrollTop: $(".projectTitle").offset().top
		}, 1000);
	});
	
	$(window).scroll(function(){

		if ($(this).scrollTop() > 1) {
			$('.scrollDown').fadeOut();
		}
		else {
		   if ($(this).scrollTop() < 1) {
			   $('.scrollDown').fadeIn();
		   } else {
			   $('.scrollDown').fadeOut();
		   }
		}

	});
	
	if($(window).width() > 1366)
		$(".imageBox").css({"margin-top" : "200px"})
	
});
