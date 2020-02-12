import "./import/modules";
import AOS from 'aos';

AOS.init();

$(".input-email").on('focus', function () {
    $(this).prev(".input-title").removeClass('hidden');
});

$(".input-email").on('blur', function () {
    $(this).prev(".input-title").addClass('hidden');
});



// btn
$(".order-btn__link").click(function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 1000,
        easing: "swing"
    });
});

// focus/blur form
$(".contacts__form-input").focus(function () {
    $(this).prev(".input-title").removeClass('hidden');
});

$(".contacts__form-input").blur(function () {
    $(this).prev(".input-title").addClass('hidden');
});



// list
$(document).click(function (e) {
    let container = $('#btn-list');
    let container1 = $('.footer-form .checked');
    if (!container.is(e.target) && !container1.is(e.target)) {
        $('.services__check-list').addClass(`hidden`);
    }
});


$('#btn-list').click(function (e) {
    e.preventDefault();
    ($('.services__check-list')).toggleClass(`hidden`);
});

$('.footer-form .checked').on('click', function () {
    ($('.services__check-list')).toggleClass(`hidden`);
});


// checkbox
let countChecked = function () {
    let id = $(this).attr('id');
    let n = $(this).prop("checked");

    if (n === true) {
        $("label[for='" + id + "'] .label-box span").addClass(`check-box`);
    } else {
        $("label[for='" + id + "'] .label-box span").removeClass(`check-box`);
    }

    let val = [];
    $('.contacts__form input:checked').each(function () {
        val.push(` ${$("label[for='"+this.id+"'] .item").text()}`);
    })

    $('.contacts__form .checked').css('padding-left', '14px');

    return $('.contacts__form .checked').val(val).text();
};


$('input[type=checkbox]').on('click', countChecked);

// Промокод
$('.plus').on('click', function () {
    $('.prom-code-input').addClass("active");
    $('.plus').css("display", 'none');
    $('.promotional-code').addClass("active");
})



// Валидация форми footer
function formValidation(form) {

    let inputs = $(form).find('input:not([type="submit"])');

    inputs.each((index, element) => {

        let value = $(element).val();

        if ($(element).attr('name') === 'user_name') {
            if (value === '') {
                $(element).addClass('input-error');

                setTimeout(function () {
                    $(element).removeClass('input-error');
                    return false;
                }, 2500);
            }
        }
        if ($(element).attr('name') === 'e-mail') {

            if (value.length > 0 && (value.match(/.+?\@.+/g) || []).length !== 1 || value === '') {

                $(element).addClass('input-error');

                setTimeout(function () {
                    $(element).removeClass('input-error');
                    return false;
                }, 2500);

            }

        }

    });

    return true;

};
formSend('#orderForm');
formSend('.emailForm');

function formSend(selector) {

    $(selector).on('submit', function (event) {
        event.preventDefault();


        if (formValidation($(selector))) {
            $.ajax({
                url: "/mail.php", //url страницы (action_ajax_form.php)
                type: "POST", //метод отправки
                data: $(this).serialize(), // Сеарилизуем объект
                success: function (response) { //Данные отправлены успешно
                    $(this).trigger('reset');
                    $.fancybox.open($('.popup-cform'));
                },
                error: function (response) { // Данные не отправлены              
                    throw new Error(response)
                }
            });
        }

    });
}

// read more animate
$('.read-more').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('active');

    let content = $(".seo__content");
    let currentHeight = content.css("height");

    content.toggleClass('active');

    content.css("height", "auto");

    let animateHeight = content.css("height");

    content.css("height", currentHeight);

    content.animate({
        height: animateHeight
    })

    if ($(this).hasClass('active')) {
        $(this).find('span').text('Скрыть');
    } else {
        $(this).find('span').text('Читать полностью');
    }
});

// Слайдер
$('#slider-wrap').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    // center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            center: true,
        },
        480: {
            items: 2,
        },
        600: {
            items: 3,
        },
        800: {
            items: 4,
        },
        1100: {
            items: 5,
        }
    }
})

// Стилизированые переключатели для слайдера
$(".next_button").click(function () {
    $('#slider-wrap').trigger("next.owl.carousel");
});

$(".prev_button").click(function () {
    $('#slider-wrap').trigger("prev.owl.carousel");
});