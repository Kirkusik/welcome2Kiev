`use strict`;

// Выпадающий список первого елемента списка header
$(document).click(function (e) {
    let container = $("#head-list-one");
    if (container.has(e.target).length === 0) {
        $('#head-list-one').removeClass(`list-active`);
        $('.list-li').addClass(`display-show`);
        ($('#head-list-one .img-but')).removeClass(`active-but`);
    }
});

$('#head-list-one').click(function () {
    $('#head-list-one').toggleClass(`list-active`);
    $('.list-li').toggleClass(`display-show`);
    ($('#head-list-one .img-but')).toggleClass(`active-but`);
});


// Выпадающий список второго елемента списка header
$(document).click(function (e) {
    let container = $("#head-list-two");
    if (container.has(e.target).length === 0) {
        $('#head-list-two').removeClass(`list-active`);
        $('.list-li-lang').addClass(`display-show`);
        ($('#head-list-two .img-but')).removeClass(`active-but`);
    }
});

$('#head-list-two').click(function () {
    $('#head-list-two').toggleClass(`list-active`);
    $('.list-li-lang').toggleClass(`display-show`);
    ($('#head-list-two .img-but')).toggleClass(`active-but`);
});

// Модальное окно
$('.but-plush').click(function () {
    $('.header').toggleClass(`top-nav-active`);
});



// scroll
$("#btn-bottom").click(function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
})

$(".wrap-ul a").click(function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
})