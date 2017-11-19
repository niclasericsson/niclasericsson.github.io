$(document).ready(function() {

	$(".infoBox").on("click", function(){
		console.log($(this).val());
		//$(this).find(".projectInfo").fadeIn();
		if($(this).attr("data-status") == "closed"){
			$(this).children(".projectInfo").show();
			$(this).attr("data-status", "open");
		}
		else{
			$(this).children(".projectInfo").hide();
			$(this).attr("data-status", "closed");
		}
	});
	
});
