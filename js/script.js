$(document).ready(function() {

	$(".infoBox").on("click", function(){

		if($(this).attr("data-status") == "closed"){

			// Close open boxes
			$(this).siblings(".infoBox").attr("data-status", "closed");
			$(this).siblings(".infoBox").children(".labels").hide();
			$(this).siblings(".infoBox").children(".projectInfo").hide();

			// Open box
			$(this).children(".labels").slideToggle('fast');
			$(this).children(".projectInfo").slideToggle('fast');
			$(this).attr("data-status", "open");
		}
		else{
			$(this).children(".labels").slideToggle('fast');
			$(this).children(".projectInfo").slideToggle('fast');
			$(this).attr("data-status", "closed");
		}
		
	});
	
});
