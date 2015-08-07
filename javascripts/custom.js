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
    //Идея не работает, контейнер меняет высоту в любую точку времени, при скроле вниз блок брезается
    //$(window).resize(function () {
    //    initContainer();
    //});

    //function initContainer() {
    //    var windowWidth = $(window).width(),windowHeight = $(window).height(),
    //        navbarHeight = $('#heightJs').height();
    //    containerHeight = windowHeight - navbarHeight;

    //    for (var i = 0; i < document.getElementsByClassName("ms-slide").length; i++) {
    //        document.getElementsByClassName("ms-slide")[i].style.height = containerHeight + "px";
    //    }
    //}



});