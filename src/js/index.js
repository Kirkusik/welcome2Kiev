import "./import/modules";
import AOS from 'aos';

AOS.init();

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
$(".contacts__form-input, .footer-massage").focus(function () {
    $(this).prev(".input-title").removeClass('hidden');
});

$(".contacts__form-input, .footer-massage").blur(function () {
    $(this).prev(".input-title").addClass('hidden');
});

function inputEmailValid() {
    let inputs = document.querySelectorAll(`.input-email, [type="email"]`);
    inputs.forEach(element => {
        element.addEventListener('blur', function () {
            if (element.value && element.value !== "") {
                element.classList.add('entered');
            } else {
                element.classList.remove('entered');
            }
        });
    });
}
inputEmailValid();

$('#btn-list').click(function (e) {
    e.preventDefault();
    ($('.services__check-list')).toggleClass(`hidden`);
});

$('.service-check').on('click', function () {
    let id = $(this).attr('id');

    if ($(this).is(':checked')) {
        $("label[for='" + id + "'] .label-box span").addClass(`check-box`);
    } else {
        $("label[for='" + id + "'] .label-box span").removeClass(`check-box`);
    }

    let val = [];
    $('.contacts__form input:checked').each(function () {
        val.push(` ${$("label[for='"+this.id+"'] .item").text()}`);
    })

    $('.contacts__form .checked').css('padding-left', '14px');

    $('.contacts__form .checked').val(val).text();
});

$('.footer-form .checked').on('click', function () {
    ($('.services__check-list')).toggleClass(`hidden`);
});

// Промокод
$('.plus').on('click', function () {
    $('.prom-code-input').addClass("active");
    $('.plus').css("display", 'none');
    $('.promotional-code').addClass("active");
    $('label[for="promo-check"]').addClass('input-title');
})

$('.emailForm').on('submit', function (event) {
    event.preventDefault();

    let emailEl = $(this).find('.input-email');

    if (validateEmail($(emailEl).val()) === false) {
        addErrorClass($(emailEl))
    } else {
        formSend($(this), '.popup-promo');
    }

});

$('#orderForm').on('submit', function (event) {
    event.preventDefault();

    console.log($(this).serialize());

    let valid = true;

    let user_name = $(this).find('[name="user_name"]');

    if (validateText($(user_name).val()) === false) {
        valid = valid && false;
        addErrorClass($(user_name));
    }

    let checkboxes = $(this).find('[name="services"]:checked');

    if (checkboxes.length < 0) {
        valid = valid && false;
        addErrorClass('.service-list-input');
    }

    let email = $(this).find('[name="e-mail"]');

    if (validateEmail($(email).val()) === false) {
        addErrorClass($(email));
        valid = valid && false;
    }

    if (valid) {
        formSend($(this), '.popup-cform');
    }
});

function addErrorClass(elem) {
    $(elem).addClass('input-error');

    setTimeout(function () {
        $(elem).removeClass('input-error');
    }, 2500);
}

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function validateText(text) {
    let letters = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    if (text !== '') {
        if (!text.match(letters)) {
            return false;
        }
    } else {
        return false;
    }

    return true;
}

function formSend(form, popUP) {
    $.ajax({
        url: "/mail.php", //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        data: $(form).serialize(), // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно
            $(form).trigger('reset');
            $.fancybox.open($(popUP));
        },
        error: function (response) { // Данные не отправлены              
            throw new Error(response)
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