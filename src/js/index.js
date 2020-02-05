import "./import/modules";

// main form - 1
$(".input-email").focus(function () {
    $(".input-leg").removeClass('display-show');
});

$(".input-email").blur(function () {
    $(".input-leg").addClass('display-show');
});

$('.sub-btn').click(function (event) {
    let email = $('.input-email').val();

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || $('.input-email').val() == '') {
        event.preventDefault();

        $(".input-email").addClass('input-error');

        setTimeout(function () {
            return $(".input-email").removeClass('input-error');
        }, 1500)
    } else {
        $.fancybox.open($('#special'));
    }


});


// main form - 2
$(".input-email1").focus(function () {
    $(".input-leg1").removeClass('display-show');
});

$(".input-email1").blur(function () {
    $(".input-leg1").addClass('display-show');
});

// Отправка формы спецпредложения
$('.emailForm').on('submit', function (event) {
    event.preventDefault();
    if (formValidation()) {
        //вывод отправляемых данных в консоль
        console.log($(this).serialize());
    }
    //появление всплывающего окна
    $.fancybox.open($('#special'));
});

$('.sub-btn1').click(function (event) {
    let email = $('.input-email1').val();

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || $('.input-email1').val() == '') {
        event.preventDefault();

        $(".input-email1").addClass('input-error');

        setTimeout(function () {
            $(".input-email1").removeClass('input-error');
        }, 1500)
    } else {
        alert('Здесь текст 02');
    }

});


// btn
$(".wrap-content-btn a").click(function (e) {
    e.preventDefault();


    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
});



// Слайдер
$('#slider-wrap').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
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
$(".next_button").click(function(){
    $('#slider-wrap').trigger("next.owl.carousel");
});
   
$(".prev_button").click(function(){
    $('#slider-wrap').trigger("prev.owl.carousel");
});