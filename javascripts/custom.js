/*
    DINAMICKA DEVELOPMENT
    Documentation

    1.Top menu fixed
    2.Video slider properties

*/

jQuery(function ($) {
    //======== 1.Top menu fixed =================================
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-fixed-top").addClass('past-main');
            $('.Layer_1').addClass('minver');
        }
        else {
            $('.Layer_1').addClass('minver');
            $(".navbar-fixed-top").removeClass('past-main');
        }
    });
    //======== 2.Video slider properties =================================
    $('#video-slide1').on('canplaythrough', videoStarter);
    $('#video-slide1').on('ended', videoChange);

    $(".Slider-with-video").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-current video').off('canplaythrough', videoStarter);
        $('.slick-current video').off('ended', videoChange);
    });
    $('.Slider-with-video').on('afterChange', function (event, slick, currentSlide) {
        var currentVideo = $('.slick-current video')[0];
        if (currentVideo.readyState == 4) { currentVideo.play(); } else { $('.slick-current video').on('canplaythrough', videoStarter); };
        $('.slick-current video').on('ended', videoChange);
    });
    function videoStarter() { this.play(); };
    function videoChange() { $(".Slider-with-video").slick('slickNext'); };


});