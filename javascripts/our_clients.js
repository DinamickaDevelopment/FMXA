$(document).ready(function () {
    //document.getElementById('filter-btn-holder').addEventListener('click', FilterLogic, true);
    //function FilterLogic(e) {
    //    var targer = e.target;
    //    filter = e.target.dataset.filter;
    //    if (!targer.classList.contains(filter + '-sprt-active')) {
    //        targer.classList.add(filter + '-sprt-active');
    //        $('.company').each(function(i){
    //            if (!this.classList.contains(filter)) {
    //                this.style.display = "none";
    //            }
    //        });
    //    } else {
    //        targer.classList.remove(filter + '-sprt-active');
    //        $('.company').each(function (i) {
    //                this.style.display = "block";
    //        });
    //    }
    //}
    $('.filter-sprite').bind('click', filterLogick);

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
                    this.style.display = "block";
                }
            });
        } else {
            e.target.classList.remove('active');
            CosmClass = filter + '-sprt-active';
            e.target.classList.remove(CosmClass);
            $('.company').each(function (i) {
                if (this.classList.contains(filter)) {
                    this.style.display = "none";
                }
            });
            if (!filterCheck()) {
                $('.company').each(function (i) { this.style.display = "block"; });
            }
        }
    }

    function AlldisplayNone() { $('.company').each(function (i) { this.style.display = "none"; }); firstfilter = false; }

    function filterCheck (e) {
        for (var i = 0; i < document.getElementsByClassName('filter-sprite').length; i++) {
            if (document.getElementsByClassName('filter-sprite')[i].classList.contains('active'))
                return true;
        }
        firstfilter = true;
        return false;
    }

});