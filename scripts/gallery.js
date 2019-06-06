if(screen.width < 640){
  
    var width5 = 171; // ширина блока
    var count5 = 1; // количество блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');

    var position5 = 0; // текущий сдвиг влево

    btnBack5.setAttribute("style", "opacity: 0.5");

    btnBack5.onclick = function() {
      // сдвиг влево
      position5 = Math.min(position5 + width5, 0)
      list5.style.marginLeft = position5 + 'px';

      if (position5 == 0) {
        btnBack5.setAttribute("style", "opacity: 0.5");

      }
      btnNext5.setAttribute("style", "opacity: 1");
    };

    btnNext5.onclick = function() {
      // сдвиг вправо
      position5 = Math.max(position5 - width5, -width5 * (listElems5.length - count5));
      list5.style.marginLeft = position5 + 'px';

      if (position5 == (-width5 * (listElems5.length - count5))) {
        btnNext5.setAttribute("style", "opacity: 0.5");

      }
      btnBack5.setAttribute("style", "opacity: 1");
    };

}
else if(screen.width < 1300) {
    var width5 = 207; // ширина блока
    var count5 = 3; // количество блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');

    var position5 = 0; // текущий сдвиг влево

    btnBack5.setAttribute("style", "opacity: 0.5");

    btnBack5.onclick = function() {
      // сдвиг влево
      position5 = Math.min(position5 + width5, 0)
      list5.style.marginLeft = position5 + 'px';

      if (position5 == 0) {
        btnBack5.setAttribute("style", "opacity: 0.5");

      }
      btnNext5.setAttribute("style", "opacity: 1");
    };

    btnNext5.onclick = function() {
      // сдвиг вправо
      position5 = Math.max(position5 - width5, -width5 * (listElems5.length - count5));
      list5.style.marginLeft = position5 + 'px';

      if (position5 == (-width5 * (listElems5.length - count5))) {
        btnNext5.setAttribute("style", "opacity: 0.5");

      }
      btnBack5.setAttribute("style", "opacity: 1");
    };
}
else if(screen.width < 1800) {
    var width5 = 236; // ширина блока
    var count5 = 5; // количество блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');

    var position5 = 0; // текущий сдвиг влево

    btnBack5.setAttribute("style", "opacity: 0.5");

    btnBack5.onclick = function() {
      // сдвиг влево
      position5 = Math.min(position5 + width5, 0)
      list5.style.marginLeft = position5 + 'px';

      if (position5 == 0) {
        btnBack5.setAttribute("style", "opacity: 0.5");

      }
      btnNext5.setAttribute("style", "opacity: 1");
    };

    btnNext5.onclick = function() {
      // сдвиг вправо
      position5 = Math.max(position5 - width5, -width5 * (listElems5.length - count5));
      list5.style.marginLeft = position5 + 'px';

      if (position5 == (-width5 * (listElems5.length - count5))) {
        btnNext5.setAttribute("style", "opacity: 0.5");

      }
      btnBack5.setAttribute("style", "opacity: 1");
    };
}

else{
  var width5 = 310; // ширина блока
    var count5 = 5; // количество блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');

    var position5 = 0; // текущий сдвиг влево

    btnBack5.setAttribute("style", "opacity: 0.5");

    btnBack5.onclick = function() {
      // сдвиг влево
      position5 = Math.min(position5 + width5, 0)
      list5.style.marginLeft = position5 + 'px';

      if (position5 == 0) {
        btnBack5.setAttribute("style", "opacity: 0.5");

      }
      btnNext5.setAttribute("style", "opacity: 1");
    };

    btnNext5.onclick = function() {
      // сдвиг вправо
      position5 = Math.max(position5 - width5, -width5 * (listElems5.length - count5));
      list5.style.marginLeft = position5 + 'px';

      if (position5 == (-width5 * (listElems5.length - count5))) {
        btnNext5.setAttribute("style", "opacity: 0.5");

      }
      btnBack5.setAttribute("style", "opacity: 1");
    };
}