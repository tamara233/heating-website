//add shadow on FAQ
$('.panel-title').on('click', function(){
    $(this).removeClass('faq-shadow');
    $(this).addClass('no-hover');

    $('.panel-default').addClass('faq-shadow');
});