$(document).ready(function(){
    $('.reviews__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    
    $('.icon').click(function(){
        $('.overlay').toggleClass('block');
        $('.icon').toggleClass('active1');
        $('.header__menu').toggleClass('show');
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");
   

    $('.button').click(function() {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
      });


});  


