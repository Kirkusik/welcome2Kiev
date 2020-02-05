import "./import/modules";
var $ = require('jQuery');

// main form - 1
$(".input-email").focus(function() {
    $(".input-leg").removeClass('display-show');
});

$(".input-email").blur(function() {
    $(".input-leg").addClass('display-show');
});

$('.sub-btn').click(function(event){
    let email = $('.input-email').val();
    
    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || $('.input-email').val() == '') {
        event.preventDefault();

        $(".input-email").addClass('input-error');

        setTimeout(function(){
            return $(".input-email").removeClass('input-error');
        }, 1500)
    }else{
        alert('Здесь текст 01');
    }

    
});


// main form - 2
$(".input-email1").focus(function() {
    $(".input-leg1").removeClass('display-show');
});

$(".input-email1").blur(function() {
    $(".input-leg1").addClass('display-show');
});


$('.sub-btn1').click(function(event){
    let email = $('.input-email1').val();
    
    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || $('.input-email1').val() == '') {
        event.preventDefault();

        $(".input-email1").addClass('input-error');

            setTimeout(function(){
            $(".input-email1").removeClass('input-error');
        }, 1500)
    }else{
        alert('Здесь текст 02');
    }

});


// btn
$(".wrap-content-btn a").click(function(e) {
    e.preventDefault();


    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
})
