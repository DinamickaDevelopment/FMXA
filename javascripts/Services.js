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
}); 