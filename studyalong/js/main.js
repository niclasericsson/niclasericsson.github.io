$(document).ready(function () {

    $('.mainImage').animate({'opacity':'1'}, 1000);
    $('.screenShotImage').animate({'opacity':'1'}, 1000);

	$(window).scroll( function(){

        $('.image').each( function(i){
        	
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).parent().parent().animate({'opacity':'1'},500);
            }

        });


        if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var bottom_of_object = $('#logoContainer').offset().top + $('#logoContainer').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                var delay = 0;
                $('#logoContainer').children().each( function(i){
                    delay = delay + 50;
                    $(this).delay(delay).animate({'opacity':'1'},500);
                });
            }
        } else {
            $('#logoContainer').children().each( function(i){
                $(this).animate({'opacity':'1'},500);
            });
        }

    });

    $(".arrow").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#uspContainer").offset().top
        }, 500);
    });

});