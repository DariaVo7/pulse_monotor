$(document).ready(function(){ 
    $('.carousel__inner').slick({ 
        speed: 700, /* скорость подключения */
        adaptiveHeight: true, /* адаптация сайта под высоту картинки */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg"></button>',
        respontive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });