var $ = require('jQuery');

// focus/blur form
$(".text-form2").focus(function () {
    $(".input-leg2").removeClass('display-show');
});

$(".text-form2").blur(function () {
    $(".input-leg2").addClass('display-show');
});

$(".text-form3").focus(function () {
    $(".input-leg3").removeClass('display-show');
});

$(".text-form3").blur(function () {
    $(".input-leg3").addClass('display-show');
});


// list
$(document).click(function (e) {
    let container = $('#btn-list');
    let container1 = $('.footer-form .checked');
    if (!container.is(e.target) && !container1.is(e.target)) {
        $('.wrap-input-list').addClass(`display-show`);
    }
});


$('#btn-list').click(function (e) {
    e.preventDefault();
    ($('.wrap-input-list')).toggleClass(`display-show`);
});

$('.footer-form .checked').on('click', function () {
    ($('.wrap-input-list')).toggleClass(`display-show`);
});

// checkbox
let countChecked = function () {
    let id = $(this).attr('id');
    let n = $(this).prop("checked");

    if (n === true) {
        $("label[for='" + id + "'] .check-box").removeClass(`display-show`);
    } else {
        $("label[for='" + id + "'] .check-box").addClass(`display-show`);
    }

    let val = [];
    $('.footer-form input:checked').each(function () {
        val.push(` ${$("label[for='"+this.id+"'] span").text()}`);
    })

    $('.footer-form .checked').css('padding-left', '14px');

    return $('.footer-form .checked').val(val).text();
};


$('input[type=checkbox]').on('click', countChecked);


// Валидация форми footer
function formValidation() {

    let email = $('.text-form3').val();

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || $('.text-form3').val() == '') {
        e.preventDefault();

        $(".text-form3").addClass('input-error');

        setTimeout(function () {
            return $(".text-form3").removeClass('input-error');
        }, 1500)
    }

    if ($('.text-form2').val() == '') {
        e.preventDefault();
        $(".text-form2").addClass('input-error');

        setTimeout(function () {
            return $(".text-form2").removeClass('input-error');
        }, 1500)
    }
};

$('#orderForm').on('submit', function (event) {
    event.preventDefault();
    formValidation();
    console.log($('#orderForm').serialize());

});

// read more animate
$('.read-more').on('click', function (e) {
    e.preventDefault();

    let currentHeight = $(".wrap-SEO-p").css("height");

    if (+currentHeight.substring(0, currentHeight.length - 2) < 50) {

        $(".wrap-SEO-p").css("height", "auto");

        let animateHeight = $(".wrap-SEO-p").css("height");

        $(".wrap-SEO-p").css("height", currentHeight);

        $(".wrap-SEO-p").animate({
            height: animateHeight
        })

        $('.read-more').text('Скрыть');

        $('.read-more').css('width', '75px');

    } else {
        $(".wrap-SEO-p").animate({
            height: 47
        }, 500);

        $('.read-more').text('Читать полностью');

        $('.read-more').css('width', '210px');
    }

    $(".text-opacity").animate({
        height: ["toggle", "swing"],
        opacity: "toggle"
    }, 500, "linear")
});