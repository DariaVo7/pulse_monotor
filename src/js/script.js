/* $(document).ready(function(){ 
    $('.carousel__inner').slick({ 
        speed: 700, скорость подключения
        adaptiveHeight: true, адаптация сайта под высоту картинки
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
  });  код для слайдера click*/

 
  const slider = tns({
    container: '.carousel__inner', /* вставляем необходимый класс */
    items: 1, /* сколько элементов будет отображаться на странице */
    slideBy: 'page',
    autoplay: false, /* автопереключение слайдов */
    controls: false, /* убрать кнопки переключения по умолчанию */
    nav: false /* отключаем точки для переключения слайдов */
  });
  document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
  });


(function($) {
$(function() {

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active') /* активному табу присваивается класс активности, у остальных удаляется */
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active'); /* внутри общего блока container происходит поиск контента с классом catalog__content, у найденного контента класс активности удаляется, расчитывается номер активного блока (тот, на который нажали) и ему присваивается класс активности */
  });
});
})(jQuery);


