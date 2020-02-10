// scroll
$(".footer__policy").click(function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
})