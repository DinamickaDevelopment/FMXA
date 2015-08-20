//  DINAMICKA DEVELOPMENT
//  Documentation

jQuery(function ($) {

    for (var i = 0; i < document.getElementsByClassName("btn_container").length; i++) {
        document.getElementsByClassName("btn_container")[i].addEventListener("click", ClickFunction, true);
    }
    //function ClickFunction(e){
    //    var id = "#" + e.target.dataset.idholder, section = "#" + e.target.dataset.section, selector;
    //    selector = section + " " + id;
    //    //Cleane all blocks from "active" style
    //    $(section + " #caseContainer").removeClass("active");
    //    $(section + " #videoContainer").removeClass("active");
    //    $(section + " #docContainer").removeClass("active");

    //    $(selector).addClass("active");
    //} !-й вариант логики кнопок, принцып одновременной активности одного блока

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
}); 