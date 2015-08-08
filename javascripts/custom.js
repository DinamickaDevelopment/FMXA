/*
    DINAMICKA DEVELOPMENT
    Documentation

    1.Top menu fixed
    2.Current page
    4.Adaptive height
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


    //======== 4.Adaptive height =================================

    $(document).ready(function () {
        var isMobile = {
            Android: function () { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
            any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
        };
        //Mobile Check -end
        // Calibrate slider's height   

        var winHeight = $(window).height(), sliderHeight;


        if (isMobile.any()) {

            for (var i = document.getElementsByTagName("video").length; i > 0; i--) {
                var node = document.getElementsByTagName("video")[0];
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }

            sliderHeight = 670;
            if ((winHeight) > 670) { sliderHeight = winHeight - 150 }

            var slider = new MasterSlider();
            slider.setup('masterslider', {
                space: 0,
                mouse: false,
                fullwidth: true,
                loop: true,
                swipe: false,
                autoplay: true,
                width: 1280,
                height: sliderHeight
            });
        } else {

            sliderHeight = winHeight - 150
            var slider = new MasterSlider();
            slider.setup('masterslider', {
                space: 0,
                mouse: false,
                fullwidth: true,
                loop: true,
                swipe: false,
                autoplay: false,
                width: 1280,
                height: sliderHeight
            });

            //Video download logic
            document.getElementById("video1").addEventListener('canplaythrough', videoStarter);
            document.getElementById("video1").addEventListener('ended', videoChange);

            var startTimeout = setTimeout(function () {//Asynchronous initialization

                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function () {
                    // Shortcut indikator logic
                    var number = slider.api.index();
                    for (var i = 0; i < 6; i++) { $(".shortcut-svg svg").eq(i).attr("class", ""); }
                    $(".shortcut-svg svg").eq(number).attr("class", "active-svg");
                    // Shortcut indikator logic - end
                });
                slider.api.addEventListener(MSSliderEvent.CHANGE_END, function () {
                    var curVideo = slider.api.view.currentSlide.bgvideo;
                    if (curVideo.readyState == 4) { curVideo.play(); }
                    else { curVideo.addEventListener('canplaythrough', videoStarter); };
                    curVideo.addEventListener('ended', videoChange);
                });

            }, 10);//Asynchronous initialization -end

            function videoStarter() { this.play(); };
            function videoChange() {
                slider.api.next();
                this.removeEventListener('canplaythrough', videoStarter);
                this.removeEventListener('ended', videoChange);
            };//Video download logic - end

        }//end of mibile chek




    });

});