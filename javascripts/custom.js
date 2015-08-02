/*
    DINAMICKA DEVELOPMENT
    Documentation

    1.Top menu fixed
    2. Current page
    3.Video slider properties

*/

jQuery(function ($) {
    //======== 1.Top menu fixed =================================
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-fixed-top").addClass('past-main');
        }
        else {
            $(".navbar-fixed-top").removeClass('past-main');
        }
    });

    //======== 2. ========================================================

    var links = $("#top-menu li a");
    links.eq(0).addClass("black");

    links.click(function () {

        links.removeClass("black");
        links.addClass("gray");

        $(this).addClass("black");         

      });

    


    //======== 3.Video slider properties =================================
    $('#video-slide1').on('canplaythrough', videoStarter);
    $('#video-slide1').on('ended', videoChange);

    $(".Slider-with-video").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-current video').off('canplaythrough', videoStarter);
        $('.slick-current video').off('ended', videoChange);
    });
    $('.Slider-with-video').on('afterChange', function (event, slick, currentSlide) {
        var currentVideo = $('.slick-current video')[0];

        if (currentVideo.readyState == 4) { currentVideo.play();
            if ($('.slick-current+.slick-slide video').attr('preload') == "none") {
                $('.slick-current+.slick-slide video').attr('preload', "auto");
            }
            else {
                $('.slick-current video').on('canplaythrough', videoStarter);
            };
            $('.slick-current video').on('ended', videoChange);
        }
    });


        function videoStarter() { this.play(); 
            if ($('.slick-current+.slick-slide video').attr('preload') == "none") {
                $('.slick-current+.slick-slide video').attr('preload', "auto");
            }
        };


    function videoChange() {$(".Slider-with-video").slick('slickNext');};

    


});