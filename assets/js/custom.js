//add shadow on FAQ
$('.panel-heading').on('click', function(){
    $(this).children('.panel-title').toggleClass('faq-shadow');
    $(this).children('.panel-title').toggleClass('no-hover');

    $(this).closest('.panel-default').toggleClass('faq-shadow');
});