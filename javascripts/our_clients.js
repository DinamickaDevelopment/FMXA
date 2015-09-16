//Dinamicka Development
//Documentation
//
//Mobile Check
//Filter logick
//Adaptive height


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

    if (!isMobile.any()) {//mobile check
    //---------------Filter logick----------------
    var firstfilter = true;
    function filterLogick(e) {
        if (firstfilter) { AlldisplayNone(); }
        var filter = this.dataset.filter, CosmClass = filter + '-sprt-active';
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active');
            CosmClass = filter + '-sprt-active';
            e.target.classList.add(CosmClass);
            $('.company').each(function(i){
                if (this.classList.contains(filter)) {
                    this.style.display = "inline-block";
                }
            });
        } else {
            e.target.classList.remove('active');
            CosmClass = filter + '-sprt-active';
            e.target.classList.remove(CosmClass);
            $('.company').each(function (i) {
                if (this.classList.contains(filter)) {this.style.display = "none";}
            });
            if (!filterCheck()) {
                $('.company').each(function (i) { this.style.display = "inline-block"; });
            }
        }
    }
    $('.filter-sprite').bind('click', filterLogick);

    function AlldisplayNone() { $('.company').each(function (i) { this.style.display = "none"; }); firstfilter = false; }
    function filterCheck (e) {
        for (var i = 0; i < document.getElementsByClassName('filter-sprite').length; i++) {
            if (document.getElementsByClassName('filter-sprite')[i].classList.contains('active')) { return true; }
        }
        firstfilter = true;
        return false;
    }
    //---------------Filter logick----end---------
    //---------------Adaptive height--------------
        var winHeight = $(window).height();
        var SectionHeight = winHeight - 90;
        $('#tech_area').css('height', SectionHeight);
   //---------------Adaptive height---end--------
    }
});