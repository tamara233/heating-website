//add shadow on FAQ
$('.panel-heading').on('click', function(){
    $(this).children('.panel-title').toggleClass('faq-shadow');
    $(this).children('.panel-title').toggleClass('no-hover');
    $(this).find(".chevron").toggleClass('rotate-90');

    $(this).closest('.panel-default').toggleClass('faq-shadow');
});

//add box-shadow to the navbar
if ($(window).width() > 992) {
    $('.navbar').addClass('sticky-top')
    $(window).scroll(function() {     
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar").addClass("navbar-shadow");
        }
        else {
            $(".navbar").removeClass("navbar-shadow");
        }
    });
}
