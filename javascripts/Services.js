//  DINAMICKA DEVELOPMENT
//  Documentation

jQuery(function ($) {

    for (var i = 0; i < document.getElementsByClassName("btn_container").length; i++) {
        document.getElementsByClassName("btn_container")[i].addEventListener("click", ClickFunction, true);
    }

    //BTN-click logic
    function ClickFunction(e){
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
    ////BTN-click logic - end

    //window.addEventListener("scroll", scroled, false);
    //var flag = true;
    //function scroled(e) {

    //    var a = $('#Icons1_svg');

    //    if (flag) {

    //        $('#Icons1_svg').addClass('svg_2_anim');
    
    //    setTimeout(function () {
    //        window.removeEventListener("scroll", scroled, false);
    //    },2000);


    //    }

    //    window.pageXOffset = "0";
    //}

    var isMobile = {
        Android: function () { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
        any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };
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

});