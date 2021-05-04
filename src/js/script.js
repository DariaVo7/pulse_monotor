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

  $('.catalog-item__link').each(function(i) { /* перебираем и находим все ссылки с данным классом, определяем на какую из сылок было нажатие */
    $(this).on('click', function(e) { 
      e.preventDefault(); /* при клике на ссылку с таким классом не должны выполняться действия по умолчанию */
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* при нажатии на ссылку с классом catalog-item__link класс активности у элемента catalog-item__content удаляется и класс активности присваивается другому элементу с классом catalog-item__list */
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    }) 
  });

  $('.catalog-item__back').each(function(i) { /* перебираем и находим все ссылки с данным классом */
    $(this).on('click', function(e) { /* определяем на какую из ссылок было нажатие выполняем следующие действия */
      e.preventDefault(); /* при клике на ссылку с таким классом не должны выполняться действия по умолчанию */
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* при нажатии на ссылку с классом catalog-item__back класс активности у элемента catalog-item__content удаляется и класс активности присваивается другому элементу с классом catalog-item__list */
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    }) 
  })

// Modal 

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow'); /* при нажатии на элемент с с data-атрибутом consultation, а также с таким же id, появляется затемнённый слой overlay и соответствующее модальное окно; в скобках указываем slow, чтобы слой появялся плавно */
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); /* при нажатии на крестик, который имеет класс modal__close, затемнённый слой с соответсвующим модальным окном скрывается */
  });
  $('.button_mini').each(function(i) { /* команда each перебирает все элементы с классом button_mini, находит значение i того элемента, на который нажали, и дальше для этого элемента выполняется код. */
    $(this).on('click', function () { /* this = тот элемент, на который нажали */
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); /* в модальное окно с id order, а именно в элемент с классом modal__descr выводится текст из элемента с классом catalog-item__subtitle */
      $('.overlay, #order').fadeIn('slow'); /* при нажатии на элемент с классом botton_mini появляется затемнённый слой overlay и соответствующее модальное окно; в скобках указываем slow, чтобы слой появялся плавно */ 
    })
  });

  function valideForms(form) { /* код, который можно подставлять, не прописывая заново */
    $(form).validate({
      rules: {
        name: {
          required: true, /* обязательное поле */
          minlength: 2 /* минимальное кол-во символов = 2 */
        },
        phone: "required",
        email: {
          required: true,
          email: true /* плагин будет проверять корректно ли введён email */
        }
      },
      messages: { /* Редактирование сообщений от плагина */
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа")
        },
        phone: "Пожалуйста, введите номер телефона",
        email: {
          required: "Пожалуйста, введите свой почтовый адрес",
          email: "Пожалуйста, введите потовый адрес в формате name@domain.com"
        }
      }
    });
  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7(999) 999-99-99");

})(jQuery);


