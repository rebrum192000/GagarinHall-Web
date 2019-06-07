if(screen.width < 640){
  
    var width2 = 171; // ширина блока
    var countVW2 = 2; // количество видимых блоков
    var count2 = 1; // количество сдвигаемых блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');
    var position2 = 0; // текущий сдвиг влево


    var slIndex2 = 1;
    showSlide2(slIndex2);

    function plusSlide2() {
        showSlide2(slIndex2 += 1*count2);
    }
    function minusSlide2() {
        showSlide2(slIndex2 -= 1*count2);
    }
    function currentSlide2(t) {
        showSlide2(slIndex2 = t);
    }
    function showSlide2(t) {
      btnBack2.setAttribute("style", "opacity: 1");
      btnNext2.setAttribute("style", "opacity: 1");
      if (t <= 1) {
        slIndex2 = 1;
        btnBack2.setAttribute("style", "opacity: 0.5");
      }
      if (t >= listElems2.length - countVW2 + 1) {
        slIndex2 = listElems2.length - countVW2 + 1;
        btnNext2.setAttribute("style", "opacity: 0.5");
      }

      var dots2 = document.getElementsByClassName("events__images-button");
      for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace("events__images-button--active", "");
      }
      var cnt = Math.ceil(slIndex2 / 3);
      dots2[cnt - 1].className += " events__images-button--active";
      position2 = width2 * (slIndex2 - 1);
      list2.style.marginLeft = - position2 + 'px';

      console.log(slIndex2);
      console.log(cnt);
    }
}
else if(screen.width < 1300) {
    var width2 = 207; // ширина блока
    var countVW2 = 3; // количество видимых блоков
    var count2 = 1; // количество сдвигаемых блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');
    var position2 = 0; // текущий сдвиг влево


    var slIndex2 = 1;
    showSlide2(slIndex2);

    function plusSlide2() {
        showSlide2(slIndex2 += 1*count2);
    }
    function minusSlide2() {
        showSlide2(slIndex2 -= 1*count2);
    }
    function currentSlide2(t) {
        showSlide2(slIndex2 = t);
    }
    function showSlide2(t) {
      btnBack2.setAttribute("style", "opacity: 1");
      btnNext2.setAttribute("style", "opacity: 1");
      if (t <= 1) {
        slIndex2 = 1;
        btnBack2.setAttribute("style", "opacity: 0.5");
      }
      if (t >= listElems2.length - countVW2 + 1) {
        slIndex2 = listElems2.length - countVW2 + 1;
        btnNext2.setAttribute("style", "opacity: 0.5");
      }

      var dots2 = document.getElementsByClassName("events__images-button");
      for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace("events__images-button--active", "");
      }
      var cnt = Math.ceil(slIndex2 / 3);
      dots2[cnt - 1].className += " events__images-button--active";
      position2 = width2 * (slIndex2 - 1);
      list2.style.marginLeft = - position2 + 'px';

      console.log(slIndex2);
      console.log(cnt);
    }
}
else if(screen.width < 1800) {
    var width2 = 236; // ширина блока
    var countVW2 = 5; // количество видимых блоков
    var count2 = 1; // количество сдвигаемых блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');
    var position2 = 0; // текущий сдвиг влево


    var slIndex2 = 1;
    showSlide2(slIndex2);

    function plusSlide2() {
        showSlide2(slIndex2 += 1*count2);
    }
    function minusSlide2() {
        showSlide2(slIndex2 -= 1*count2);
    }
    function currentSlide2(t) {
        showSlide2(slIndex2 = t);
    }
    function showSlide2(t) {
      btnBack2.setAttribute("style", "opacity: 1");
      btnNext2.setAttribute("style", "opacity: 1");
      if (t <= 1) {
        slIndex2 = 1;
        btnBack2.setAttribute("style", "opacity: 0.5");
      }
      if (t >= listElems2.length - countVW2 + 1) {
        slIndex2 = listElems2.length - countVW2 + 1;
        btnNext2.setAttribute("style", "opacity: 0.5");
      }

      var dots2 = document.getElementsByClassName("events__images-button");
      for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace("events__images-button--active", "");
      }
      var cnt = Math.ceil(slIndex2 / 3);
      dots2[cnt - 1].className += " events__images-button--active";
      position2 = width2 * (slIndex2 - 1);
      list2.style.marginLeft = - position2 + 'px';

      console.log(slIndex2);
      console.log(cnt);
    }
}

else{
    var width2 = 310; // ширина блока
    var countVW2 = 5; // количество видимых блоков
    var count2 = 1; // количество сдвигаемых блоков

    var carousel2 = document.querySelector('.events');
    var list2 = carousel2.querySelector('.events__images__list');
    var listElems2 = carousel2.querySelectorAll('.events__images__item');
    var btnBack2 = carousel2.querySelector('.btn-back');
    var btnNext2 = carousel2.querySelector('.btn-next');
    var position2 = 0; // текущий сдвиг влево


    var slIndex2 = 1;
    showSlide2(slIndex2);

    function plusSlide2() {
        showSlide2(slIndex2 += 1*count2);
    }
    function minusSlide2() {
        showSlide2(slIndex2 -= 1*count2);
    }
    function currentSlide2(t) {
        showSlide2(slIndex2 = t);
    }
    function showSlide2(t) {
      btnBack2.setAttribute("style", "opacity: 1");
      btnNext2.setAttribute("style", "opacity: 1");
      if (t <= 1) {
        slIndex2 = 1;
        btnBack2.setAttribute("style", "opacity: 0.5");
      }
      if (t >= listElems2.length - countVW2 + 1) {
        slIndex2 = listElems2.length - countVW2 + 1;
        btnNext2.setAttribute("style", "opacity: 0.5");
      }

      var dots2 = document.getElementsByClassName("events__images-button");
      for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace("events__images-button--active", "");
      }
      var cnt = Math.ceil(slIndex2 / 3);
      dots2[cnt - 1].className += " events__images-button--active";
      position2 = width2 * (slIndex2 - 1);
      list2.style.marginLeft = - position2 + 'px';

      console.log(slIndex2);
      console.log(cnt);
    }
}