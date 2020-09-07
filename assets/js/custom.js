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

// $('form').on('submit', function(e){
//     // validation code here
   
//       e.preventDefault();
    
//   });

  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validateGroup = document.getElementsByClassName('to-validate');

    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();    
    }
    //Added validation class to all form-groups in need of validation
    for (var i = 0; i < validateGroup.length; i++) {
        validateGroup[i].classList.add('was-validated');
    }   
    }, false);
    });
    }, false);
