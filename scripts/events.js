if(screen.width < 640){
  
    var width2 = 171; // ширина блока
    var count2 = 2; // количество блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };

}
else if(screen.width < 1300) {
    var width2 = 207; // ширина блока
    var count2 = 3; // количество блоков

     var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}
else if(screen.width < 1800) {
    var width2 = 236; // ширина блока
    var count2 = 5; // количество блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}

else{
  var width2 = 310; // ширина блока
    var count2 = 5; // количество блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}