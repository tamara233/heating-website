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

// Send Contact Form
window.addEventListener('load', function() {
    var form = document.getElementById('contactForm');
    var validateGroup = document.getElementsByClassName('to-validate');

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity() === false) {
    event.stopPropagation(); 
    for (var i = 0; i < validateGroup.length; i++) {
        validateGroup[i].classList.add('was-validated');
    }   
    } else {  
    var url = $(this).attr('action'),
        type = $(this).attr('method'),
        data = {};

        $(this).find('[name').each(function(index, value) {
            var name = $(this).attr('name'),
                value = $(this).val();

            data[name] = value;
        });

        $.ajax({
            url: url,
            type: type,
            contentType:"application/json",
            dataType: "json",
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res)
            },
            error: function(xhr, resp, text) {
                console.log(resp, text);
            }
            
        });

        $(form).each(function(){
            this.reset();
            $('.success-message').show();
        });
    }
    }, false);

    // Evaluation form check
    // var formEval = document.getElementById('formEval');
    // formEval.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     if (formEval.checkValidity() === false) {
    //         event.stopPropagation();             
    //         $('.error-message').show();  
    //     } else {        
    //     $('#form-section').hide();
    //     $('#eval-section').css('display', 'flex');
        
    //     $(".eval-restart").on("click", function () {
    //         formEval.reset()
    //         $('#eval-section').hide();
    //         $('#form-section').show();
    //     })
    //     return false;
    //     }
     //}, false)
 }, false);
