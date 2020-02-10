`use strict`;

$('#service-menu-list').click(function () {
    $('#service-menu-list').toggleClass(`list-active`);
    $('.list-li').toggleClass(`hidden`);
    ($('#service-menu-list .img-but')).toggleClass(`active-but`);
});

$(document).on('click', '.sublist-toggle a', function (e) {

    $(this).next('ul').toggleClass(`hidden`);
    $(this).parent('li').toggleClass('active');
});

$(document).on('click', '.sublist a', function (e) {
    if ($(this).parent().attr('id') === 'service-menu-list') {
        e.preventDefault();
        scroll(this);
    }
    $(this).parents('.sublist').toggleClass(`hidden`);
});

$('#lang-list').click(function () {
    $('#lang-list').toggleClass(`list-active`);
    $('.list-li-lang').toggleClass(`hidden`);
    ($('#lang-list .img-but')).toggleClass(`active-but`);
});

// Модальное окно
$(document).on('click', '.mobile-menu-toggle', function () {
    $('.top-nav').toggleClass(`active`);
});
$(document).on('click', '.top-nav.active a', function () {
    $('.top-nav').toggleClass(`active`);
});

// scroll
function scroll(elem) {
    let target = $(elem).attr("href");

    console.log($(target).offset().top - 100);
    console.log($(target).offset().top);

    $("html, body").animate({
        scrollTop: ($(target).offset().top - 150) + "px"
    }, {
        duration: 1000,
        easing: "swing"
    });

}

$("#btn-bottom").click(function (e) {
    e.preventDefault();
    scroll(this);
});