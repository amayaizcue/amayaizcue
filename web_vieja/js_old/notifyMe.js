/*
Author: Amaya Izcue Chourraut
Description: Personal Website and Portfolio
Date: 2016
*/

(function (e) {
    e.fn.notifyMe = function (t) {
        var n = e.extend({
            msgError: "Oops. Looks like something went wrong. Please try again later.",
            msgErrorFormat: "Your e-mail address is incorrect. Please check it and try again.",
            msgSuccess: "Congrats! You are in list. We will inform you as soon as we finish."
        }, t);
        var r = e(this);
        var i = e(this).find("input[name=senderEmail]");
        var s = e(this).attr("action");
        var o = e(this).find(".note");
        var u = e("<p class='message'></p>").appendTo(e(this));
        var a = e("<i></i>");
        var f = "fa fa-spinner fa-spin";
        var l = "fa fa-check";
        var c = "fa fa-exclamation";
        i.after(a);
        e(this).on("submit", function (t) {
            t.preventDefault();
            var h = i.val();
            var p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (p.test(h)) {
                a.removeClass();
                a.addClass(f);
                e(this).removeClass("error success");
                u.text("");
                o.show();
                e.ajax({
                    type: "POST",
                    url: s,
                    data: {
                        senderEmail: h
                    },
                    dataType: "json",
                    error: function (e) {
                        if (e.status == 200) {
                            r.addClass("success-full").removeClass("bad-email");
                            a.removeClass(f);
                            a.removeClass(c);
                            a.addClass(l);
                            u.text(n.msgSuccess);
                        } else {
                            r.addClass("error");
                            o.hide();
                            a.removeClass();
                            a.addClass(c);
                            u.text(n.msgError);
                        }
                    }
                });
            } else {
                e(this).addClass("bad-email");
                o.hide();
                a.removeClass(l);
                a.addClass(c);
                u.text(n.msgErrorFormat)
            }
        })
    }
})(jQuery)
