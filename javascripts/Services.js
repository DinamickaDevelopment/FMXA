//  DINAMICKA DEVELOPMENT
//  Documentation

jQuery(function ($) {

    $(window).resize(function () {

        location.reload();
    });

    var isMobile = {
        Android: function () { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
        any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };

    //<------------------- BTN-click logic ---------------------------------->

    for (var i = 0; i < document.getElementsByClassName("btn_container").length; i++) {
        document.getElementsByClassName("btn_container")[i].addEventListener("click", ClickFunction, true);
    }

    function ClickFunction(e) {
        if (e.target.className == "bordered-btn" || e.target.className == "bordered-btn active-btn") {
            var id = "#" + e.target.dataset.idholder, section = "#" + e.target.dataset.section, selector;
        selector = section + " " + id;

        //Cleane all blocks from "active" style

        if ($(selector).hasClass("active")) {
            $(selector).removeClass("active");
            e.target.className = "bordered-btn";
        } else {
            $(selector).addClass("active");
            e.target.className = "bordered-btn active-btn";


        }
        }
  
    }
    //<------------------- BTN-click logic -----------------END----------------->
    // <------------------ Funnel Animation ---------------------------------->
    if (!isMobile.any()) {//disable for mobile version site
    window.addEventListener('scroll', Animation_revers, false);    var FunenAnimReady,reversProgres;
    var funAnim = setTimeout(function () {
        FunenAnimReady = true;
    }, 4820);

    DisableScroll(true);
    } else {
        var PseudoBody = document.getElementById("pseudoBody")
        document.getElementById("mobileBody").appendChild(PseudoBody);
        PseudoBody.style.display = "block";
        PseudoBody.style.opacity = "1";
        PseudoBody.style.transform = "scale(1)";
    }


    function Animation_revers() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if ($("#pseudoBody").css("display") == "block" && scrolled == 0) {
            FunenAnimReady = false;
            DisableScroll(true);
            $("#pseudoBody").css({ "transform": "scale(0.7)", "opacity": "0" });
            if($(window).width() < 1368){$('#SVG-container').css({ 'top': 'calc(50% - 138px)', 'left': 'calc(50% - 100px)', 'width': '200px', 'height': '67px' });
            } else {
                $('#SVG-container').css({ 'top': 'calc(50% - 202px)', 'left': 'calc(50% - 100px)', 'width': '200px', 'height': '85px' });
            }

            var reverstime, reverstime1, reverstime2;
            reverstime = setTimeout(function () {
                $("#pseudoBody").css("display", "none");
            }, 400)
            reverstime1 = setTimeout(function () {

                $('#SVG-container').css("opacity", "0");
                reverstime2 = setTimeout(function () {
                    $('#Stage_Text_strips').css("clip", 'rect(0px, 894px,468px,0px)');
                    $('#Stage_Icons_strips').css("left", '0');
                    FunenAnimReady = true;

                },100);
            }, 1600)
        }
    }
    function DisableScroll(bool) {
        if (bool) {
            if (window.addEventListener) // older FF
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            window.onwheel = preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
            window.ontouchmove  = preventDefault; // mobile
            document.onkeydown  = preventDefaultForScrollKeys;
        } else {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = WheelReversanim;
            window.onwheel = WheelReversanim;
            window.ontouchmove = null;
            document.onkeydown = null;
        }
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

        function WheelReversanim(e) {
            if (e.deltaY < 0) {
                Animation_revers();
                FunenAnimReady = false;
            }
        }

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
            //Case when after animation scroll top


            //Animation
            if (FunenAnimReady && e.deltaY > 0) {
                $('#Stage_Text_strips').css("clip", 'rect(0px, 894px,468px,894px)');
                $('#Stage_Icons_strips').css("left", 'calc(50% - 213px)');
                var time1, time = setTimeout(function () {
                    $('#SVG-container').css({ 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'opacity': '1' })
                    time1 = setTimeout(function () {
                        $("#pseudoBody").css("display", "block");

                        setTimeout(function () {
                            $("#pseudoBody").css({ "transform": "scale(1)", "opacity": "1" });
                            setTimeout(function () {
                                DisableScroll(false);
                            }, 1000)
                        }, 50)
                    }, 550);
                }, 1100);
            }//Animation - end
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
            //Animation
            if (FunenAnimReady && e.deltaY > 0) {
                $('#Stage_Text_strips').css("clip", 'rect(0px, 894px,468px,894px)');
                $('#Stage_Icons_strips').css("left", 'calc(50% - 213px)');
                var time1, time = setTimeout(function () {
                    $('#SVG-container').css({ 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'opacity': '1' })
                    time1 = setTimeout(function () {
                        $("#pseudoBody").css("display", "block");
                        
                        setTimeout(function () {
                            $("#pseudoBody").css({ "transform": "scale(1)", "opacity": "1" });
                            setTimeout(function () {
                                DisableScroll(false);
                            }, 1000)
                        }, 50)
                    }, 550);
                }, 1100);
            }//Animation - end

        }
    }
    // <------------------ Funnel Animation ---------END------------------------->
    // <-----------------  Height Configuration ---------------------------------->

    //Проверка
    //Height Configuration
    if (!isMobile.any()) {
    var winHeight = $(window).height();
    var SectionHeight = winHeight - 90, containerHeight = SectionHeight * 0.85, containerFluidheight = SectionHeight * 0.15;

    //Funnel section
    $("#funnel").css("height", SectionHeight);

    //Go-To-Marketing section;
    $("#G2Market .container").css("height", containerHeight);
    $("#G2Market .container-fluid .row:first-child").css("height", containerFluidheight);

    $("#Sales .container").css("height", containerHeight);
    $("#Sales .container-fluid .row:first-child").css("height", containerFluidheight);

    $("#Contact_info .container").css("height", containerHeight);
    $("#Contact_info .container-fluid .row:first-child").css("height", containerFluidheight);

    $("#Awarness .container").css("height", containerHeight);
    $("#Awarness .container-fluid .row:first-child").css("height", containerFluidheight);

    $("#Marketing .container").css("height", containerHeight);
    $("#Marketing .container-fluid .row:first-child").css("height", containerFluidheight);
    } else {

        $("#Stage").css('display', 'none');
        $("#funnel").css("height", 'auto');
        $('.forMobileBlock').css('display', 'block');
    }
    // <------------------ mobile Check Function and Height Configuration --------END-------------------------->
});