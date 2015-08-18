/*
    DINAMICKA DEVELOPMENT
    Documentation

    1.Top menu fixed
    2.Current page
    4.Adaptive height
    5.Height configuratiom 
*/

jQuery(function ($) {


    $(window).resize(function () {

        location.reload();
    });

    //======== 1.Top menu fixed =================================
    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > 50) {
    //        $(".navbar-fixed-top").addClass('past-main');
    //    }
    //    else {
    //        $(".navbar-fixed-top").removeClass('past-main');
    //    }
    //});         mini header logic

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




        // This function change a slide when user click on the svg picture

        function slideChangeClick(e) {

            var slidenumber = this.dataset.numberslide - 1;
            slider.api.gotoSlide(slidenumber);
        }

        //Shortcut button
        var all_Slider_Buttons = $(".shortcut-svg");
        
        if (isMobile.any()) {

            for (var i = document.getElementsByTagName("video").length; i > 0; i--) {
                var node = document.getElementsByTagName("video")[0];
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }

            // Add picture for DISRUPTIVE block

            $("#Img_Disruptive").attr("data-src", "videos/slide5/DisruptiveMobile.jpg");

            sliderHeight = 670;
            if ((winHeight) > 670) { sliderHeight = winHeight - 99 }

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

            // Add touch event for slider buttons in Mobile versions 
            
            all_Slider_Buttons.on('touchstart', slideChangeClick); 

            var startTimeout = setTimeout(function () {//Asynchronous initialization for mobile
                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function () {
                    // Shortcut indikator logic
                    var number = slider.api.index();
                    for (var i = 0; i < 6; i++) { $(".shortcut-svg svg").eq(i).attr("class", ""); }
                    $(".shortcut-svg svg").eq(number).attr("class", "active-svg");
                    // Shortcut indikator logic - end
                }, 10);//Asynchronous initialization for mobile -end

            });
        } else
        {


            // Add picture for DISRUPTIVE block

            $("#Img_Disruptive").attr("data-src", "videos/slide5/Disruptive.jpg");

            sliderHeight = winHeight - 99
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

            // Add click event for slider buttons in Descktop versions 

            all_Slider_Buttons.on('click', slideChangeClick);

            //Shortcut button - end
            //Video download logic

            function videoStarter() { this.style.display = "inline-block"; this.style.marginTop = "-50px"; this.style.marginLeft = "0"; this.play(); };
            function videoChange() {
                slider.api.next();
                this.removeEventListener('load', videoStarter);
                this.removeEventListener('ended', videoChange);
            };//Video download logic - end

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
                    if (curVideo.readyState == 4) { curVideo.play(); curVideo.style.display = "inline-block"; curVideo.style.marginTop = "-50px"; curVideo.style.marginLeft = "0"; }
                    else { curVideo.addEventListener('load', videoStarter); };
                    curVideo.addEventListener('ended', videoChange);
                });

            }, 10);//Asynchronous initialization -end



        }//end of mibile chek

        //======== 5.Height configuratiom =================================
        // Section Tech. Insert heigth;
        
        var Section_menu = winHeight - 91; // minus menu


        // Tech block
        SectioTechBlockHeight = (Section_menu - 195); // minus text section
        $("#Tech_block").css("min-height", SectioTechBlockHeight);


        var oneRow = SectioTechBlockHeight / 2;

        $("#Tech_block  a").css("height", oneRow + "px"); // height for each one block
        //$("#Tech_block  a").css("width", oneRow + "px"); // width for each one block

                
        var height_for_svg = oneRow * 0.4 ; // height for svg graphics
        $("#Tech_block  svg").css("height", height_for_svg );

        //// align center
        var padding = (oneRow - height_for_svg - 25) /2; // padding top and bottomn for img and span
        $("#Tech_block a").css({paddingTop:padding, paddingBottom:padding });

        var height_for_span = oneRow * 0.6; // height for text
        $("#Tech_block  span").css({ heigth: height_for_span, marginTop: padding/2 });
        

        // Arsenal. Insert heigth;

        //$("#arsenal_header").css("height", Section_menu);

        img_height = Section_menu - 140;

        $("#img_bg").css("min-height", img_height);

        first_text = img_height * 0.5; // height for first block text
        paddingForBordered = img_height * 0.02;
        paddingForFirstBlock = img_height * 0.08;

        $(".first_block_text").css({ paddingTop: paddingForFirstBlock, height: first_text });
        $(".full").css({ margingBottom: paddingForBordered });


        

        //SECTION h2h 
        var img_text  = Section_menu - 165;
        $(".img-text").css("min-height", img_text); // Set a img block height in h2h


        // insert paddind and height for first text block in h2h block
        first_text = img_text * 0.5;
        paddingForBordered = img_text * 0.08;

        $("#h2h_first_text").css({ paddingTop: paddingForBordered, minHeight: first_text });

        //marginTopval = img_text * img_text / 24000;
        //$("#item-for-margin").css({ marginTop: marginTopval });
        //$("#item-for-margin").css({ marginBottom: marginTopval });



        /////////////////////////Madal window after submit event

        function ModalFunction(event)
        {
            if (event == undefined) event = window.event;

            event.preventDefault();

            $(".modal").modal('show');
        }



        $("form").on("submit", ModalFunction)



    });



});