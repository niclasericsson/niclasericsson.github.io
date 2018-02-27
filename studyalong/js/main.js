$(document).ready(function () {

    $('.mainImage').animate({'opacity':'1'}, 1000);

	$(window).scroll( function(){

        $('.image').each( function(i){
        	
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).parent().parent().animate({'opacity':'1'},500);
            }

        }); 

    });

    $(".arrow").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#uspContainer").offset().top
        }, 500);
    });

});