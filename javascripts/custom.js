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


    //======== 4.Very complicated onLoad Function =================================

    $(document).ready(function () {
        //Mobile Check
        var isMobile = {
            Android: function () { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
            any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
        };
        //Mobile Check -end
        // Calibrate slider's behavior   

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

            var startTimeout = setTimeout(function () {//Asynchronous initialization for mobile
                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function () {
                    // Shortcut indikator logic
                    var number = slider.api.index();
                    for (var i = 0; i < 6; i++) { $(".shortcut-svg svg").eq(i).attr("class", ""); }
                    $(".shortcut-svg svg").eq(number).attr("class", "active-svg");
                    // Shortcut indikator logic - end
                }, 10);//Asynchronous initialization for mobile -end

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
            //Shortcut button
            for (var i = 0; i < document.getElementsByClassName('shortcut-svg').length; i++) {
                document.getElementsByClassName('shortcut-svg')[i].addEventListener('click', slideChangeClick, true);
                //document.getElementsByClassName('shortcut-svg')[i].addEventListener('touchend', slideChangeClick, true);    it doesnt work Possible cause event 'touchend' and skrollr.js
            }
            function slideChangeClick(e) {
                var slidenumber = this.dataset.numberslide - 1;
                slider.api.gotoSlide(slidenumber);
            }
            //Shortcut button - end
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
                    if (curVideo.readyState == 4) { curVideo.play(); curVideo.style.display = "inline-block"; curVideo.style.marginTop = "0"; curVideo.style.marginLeft = "0"; }
                    else { curVideo.addEventListener('canplaythrough', videoStarter); };
                    curVideo.addEventListener('ended', videoChange);
                });

            }, 10);//Asynchronous initialization -end

            function videoStarter() { this.style.display = "inline-block"; this.style.marginTop = "0"; this.style.marginLeft = "0"; this.play(); };
            function videoChange() {
                slider.api.next();
                this.removeEventListener('canplaythrough', videoStarter);
                this.removeEventListener('ended', videoChange);
            };//Video download logic - end

        }//end of mibile chek

        // Section Tech. Insert heigth;
        
        var Section_menu = winHeight - 91; // minus menu
        $("#Tech").css("height", Section_menu + "px");

        // Tech Text block
        Tech_text = Section_menu * 0.3;
        $("#Tech_text").css("height", Tech_text);

        // Tech block
        SectioTechBlockHeight = (Section_menu - Tech_text); // minus text section
        $("#Tech_block").css("height", SectioTechBlockHeight);


        var oneRow = SectioTechBlockHeight / 2;

        $("#Tech_block  a").css("height", oneRow + "px"); // height for each one block
        //$("#Tech_block  a").css("width", oneRow + "px"); // width for each one block

                
        var height_for_svg = oneRow * 0.4 ; // height for svg graphics
        $("#Tech_block  img").css("height", height_for_svg );

        //// align center
        var padding = (oneRow - height_for_svg - 25) /2; // padding top and bottomn for img and span
        $("#Tech_block a").css({paddingTop:padding, paddingBottom:padding });

        var height_for_span = oneRow * 0.6; // height for text
        $("#Tech_block  span").css({ heigth: height_for_span, marginTop: padding/2 });
        
        // Arsenal. Insert heigth;

        $("#arsenal").css("height", Section_menu); 

        // img block height 
        var arsenal_header = Section_menu * 0.35;
        $("#arsenal_header").css("height", arsenal_header);

        img_height = Section_menu * 0.65;

        $("#img_bg").css("height", img_height);

        first_text = img_height * 0.5; // height for first block text
        $(".first_block_text").css({paddingTop: 20, height: first_text });
        
        //second_text = img_height * 0.25; // height for second block text
        //$(".second_block_text").css({ height: second_text });


        //SECTION h2h 

        $("#h2h").css("height", Section_menu);

        var h2h_header = Section_menu * 0.3;
        $("#h2h_header").css("height", h2h_header); // Set a h2h_header height

        var img_text  = Section_menu * 0.7;
        $(".img-text").css("height", img_text); // Set a img block height in h2h


    });



});