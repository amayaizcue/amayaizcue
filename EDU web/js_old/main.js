/*
Author: Amaya Izcue Chourraut
Description: Personal Website and Portfolio
Date: 2016
*/

function init() { var f, g, a = new google.maps.LatLng(-33.92, 151.25), b = { zoom: 11, scrollwheel: !1, draggable: !0, center: a, styles: [{ featureType: "administrative.locality", elementType: "all", stylers: [{ saturation: 7 }, { lightness: 19 }, { visibility: "on" }, { color: "#2c3e50" }, { weight: "0.01" }] }, { featureType: "landscape", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "simplified" }] }, { featureType: "poi", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "off" }] }, { featureType: "road", elementType: "geometry", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "on" }] }, { featureType: "road.arterial", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: -2 }, { visibility: "simplified" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ hue: "#e9ebed" }, { saturation: -90 }, { lightness: -8 }, { visibility: "simplified" }] }, { featureType: "transit", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: 10 }, { lightness: 69 }, { visibility: "on" }] }, { featureType: "water", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: -78 }, { lightness: 67 }, { visibility: "simplified" }] }] }, c = new google.maps.Map(document.getElementById("map"), b, a), d = [['<h6>Bondi Beach, East Coast</h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!</p>', -33.890542, 151.274856, 4], ['<h6>Coogee Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 8:00 to 22:00</p>', -33.923036, 151.259052, 5], ['<h6>Cronulla Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 10:00 to 20:00</p>', -34.028249, 151.157507, 3], ['<h6>Manly Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 6:00 to 14:00</p>', -33.80010128657071, 151.28747820854187, 2], ['<h6>Maroubra Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 12:00 to 23:30</p>', -33.950198, 151.259302, 1]], e = new google.maps.InfoWindow; for (g = 0; g < d.length; g++) f = new google.maps.Marker({ position: new google.maps.LatLng(d[g][1], d[g][2]), map: c }), google.maps.event.addListener(f, "click", function (a, b) { return function () { e.setContent(d[b][0]), e.open(c, a) } }(f, g)); google.maps.event.addListener(f, "click", function () { e.open(c, f) }), $("a#map-init").click(function () { google.maps.event.trigger(c, "resize"), c.setCenter(a) }) } $(window).load(function () { setTimeout(function () { $(".item-list").each(function (a) { !function (b) { setTimeout(function () { $(b).addClass("show-ready") }, 150 * a + 150) }(this) }) }, 250), setTimeout(function () { $(".overlay-prevent").removeClass("").addClass("display-none") }, 600) }), $(document).ready(function (a) {
    a("button.scroll-chevron").on("click", function () { a(".mfp-wrap").animate({ scrollTop: a(window).height() - 100 }, 500) }), a(".open-popup-link").magnificPopup({ type: "inline", removalDelay: 300, showCloseBtn: !1, mainClass: "animated-middle fade-entrance" }), a(document).on("click", ".mfp-close", function (b) { b.preventDefault(), a(".mfp-bg , .mfp-wrap").removeClass("fadeIn").addClass("fadeOutDown"), setTimeout(function () { a.magnificPopup.close() }, 1e3) }), a("a.open-popup-link").click(
    function () {
        //a("#nav-item").removeClass("fadeOutUp opacity-0").addClass("fadeInDown index9999"),
        //a(".list-sections").removeClass("").addClass("fadeOutDown"),
        //setTimeout(
        //function(){
        //a(".item-list").removeClass("show-ready").addClass("")
        //},800)
        a(".mfp-close").show()//removeClass("opacity-0")
    }),
    a("button.mfp-close").click(function () {
        a("#nav-item").removeClass("fadeInDown").addClass("fadeOutUp"),
        setTimeout(function () {
            a(".mfp-close").hide(),//("opacity-0"),
            a("#nav-item").removeClass("index9999").addClass(""),
            a(".list-sections").removeClass("fadeOutDown").addClass(""),
            a(".item-list").each(function (b) {
                !function (c) {
                    setTimeout(function () { a(c).addClass("show-ready") }, 150 * b + 150)
                }(this)
            })
        }, 600)
    }),
    a("#notifyMe").notifyMe(),
    a("#contact-form").contactMe(),
    a("#countdown_dashboard").countDown({ targetDate: { day: 6, month: 7, year: 2016, hour: 12, min: 0, sec: 0 }, omitWeeks: !0 })
}), google.maps.event.addDomListener(window, "load", init), google.maps.event.addDomListener(window, "resize", init);

//$('#enviarPrueba').click(function () {
//    $.ajax({
//        url: 'send_email.php',
//        type: 'POST',
//        data:
//        {
//            senderEmail: senderEmail
//        },
//        success: function (msg) {
//            alert('Email Sent: ' + senderEmail);
//        }
//    });
//});