/*
Author: Amaya Izcue Chourraut
Description: Personal Website and Portfolio
Date: 2016
*/

$(document).ready(function (a) {
    a("button.scroll-chevron").on("click", function () {
        a(".mfp-wrap").animate({
            scrollTop: a(window).height() - 100
        }, 500)
    }),
    a(".open-popup-link").magnificPopup({
        type: "inline",
        showCloseBtn: false,
        mainClass: "animated-quick fadeInUp"
    }),
    a(document).on("click", ".mfp-close", function (b) {
        b.preventDefault(),
         a(".mfp-bg, .mfp-wrap").removeClass("fadeInUp").addClass("fadeOutDown"),
             setTimeout(function () {
                 a.magnificPopup.close();
             }, 600)
    }),
    a("a.open-popup-link").click(
    function () {
        //a("#nav-item").removeClass("fadeOutUp opacity-0").addClass("fadeInDown index9999"),
        //a(".list-sections").removeClass("").addClass("fadeOutDown"),
        //setTimeout(
        //function(){
        //a(".item-list").removeClass("show-ready").addClass("")
        //},800)
        a(".mfp-close").show();//removeClass("opacity-0")
    }),
    a("button.mfp-close").click(function () {
        a("#nav-item").removeClass("fadeInDown").addClass("fadeOutUp"),
        setTimeout(function () {
            a(".mfp-close").hide(),//("opacity-0"),
            a("#nav-item").removeClass("index9999").addClass(""),
            a(".list-sections").removeClass("fadeOutDown").addClass("")//,
            //a(".item-list").each(function (b) {
            //    !function (c) {
            //        setTimeout(function () { a(c).addClass("show-ready") }, 150 * b + 150)
            //    }(this)
            //})
        }, 600)
    }),
    a("#notifyMe").notifyMe(),
    a("#contact-form").contactMe()
});