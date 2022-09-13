

// Pass single element
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: null,
    position: 'auto',
    editItems: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,

    addItemText: (value) => {
      return `Press Enter to add <b>"${value}"</b>`;
    },

    maxItemText: (maxItemCount) => {
      return `Only ${maxItemCount} values can be added`;
    },


});
document.querySelector('.choices__item--selectable').textContent = "Материал";




/* Карта */

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185, 2.354224],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16

    });
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point", // тип геометрии - точка
          coordinates: [48.872185, 2.354224] // координаты точки
      }
    });

    var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/geo.svg',
      iconImageSize: [28, 40],
      /* iconImageOffset: [-3, -42] */
  });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);

};


/* Скролл */

new SimpleBar(document.getElementById('scroll'), {
  scrollbarMaxSize: 90,

});




/* Форма */
const validate = new window.JustValidate('#form');

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('form', {

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    }
  },

  messages: {
    errorMassages:'fsfsdf',
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
    email: 'Вы не ввели e-mail',
    errorMessage: 'Passwords should be the same',
  },

});


