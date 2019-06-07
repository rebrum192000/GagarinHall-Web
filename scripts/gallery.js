if(screen.width < 640){
  
    var width5 = 171; // ширина блока
    var countVW5 = 2; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
        showSlide5(slIndex5 += 1*count5);
    }
    function minusSlide5() {
        showSlide5(slIndex5 -= 1*count5);
    }
    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      btnBack5.setAttribute("style", "opacity: 1");
      btnNext5.setAttribute("style", "opacity: 1");
      if (t5 <= 1) {
        slIndex5 = 1;
        btnBack5.setAttribute("style", "opacity: 0.5");
      }
      if (t5 >= listElems5.length - countVW5 + 1) {
        slIndex5 = listElems5.length - countVW5 + 1;
        btnNext5.setAttribute("style", "opacity: 0.5");
      }

      var dots5 = document.getElementsByClassName("gallery__images-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("gallery__images-button--active", "");
      }
      var cnt5 = Math.ceil(slIndex5 / 3);
      dots5[cnt5 - 1].className += " gallery__images-button--active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
      console.log(cnt5);
    }

}
else if(screen.width < 1300) {

    var width5 = 207; // ширина блока
    var countVW5 = 3; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
        showSlide5(slIndex5 += 1*count5);
    }
    function minusSlide5() {
        showSlide5(slIndex5 -= 1*count5);
    }
    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      btnBack5.setAttribute("style", "opacity: 1");
      btnNext5.setAttribute("style", "opacity: 1");
      if (t5 <= 1) {
        slIndex5 = 1;
        btnBack5.setAttribute("style", "opacity: 0.5");
      }
      if (t5 >= listElems5.length - countVW5 + 1) {
        slIndex5 = listElems5.length - countVW5 + 1;
        btnNext5.setAttribute("style", "opacity: 0.5");
      }

      var dots5 = document.getElementsByClassName("gallery__images-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("gallery__images-button--active", "");
      }
      var cnt5 = Math.ceil(slIndex5 / 3);
      dots5[cnt5 - 1].className += " gallery__images-button--active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
      console.log(cnt5);
    }
}
else if(screen.width < 1800) {

    var width5 = 236; // ширина блока
    var countVW5 = 5; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
        showSlide5(slIndex5 += 1*count5);
    }
    function minusSlide5() {
        showSlide5(slIndex5 -= 1*count5);
    }
    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      btnBack5.setAttribute("style", "opacity: 1");
      btnNext5.setAttribute("style", "opacity: 1");
      if (t5 <= 1) {
        slIndex5 = 1;
        btnBack5.setAttribute("style", "opacity: 0.5");
      }
      if (t5 >= listElems5.length - countVW5 + 1) {
        slIndex5 = listElems5.length - countVW5 + 1;
        btnNext5.setAttribute("style", "opacity: 0.5");
      }

      var dots5 = document.getElementsByClassName("gallery__images-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("gallery__images-button--active", "");
      }
      var cnt5 = Math.ceil(slIndex5 / 3);
      dots5[cnt5 - 1].className += " gallery__images-button--active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
      console.log(cnt5);
    }
}

else{

    var width5 = 310; // ширина блока
    var countVW5 = 5; // количество видимых блоков
    var count5 = 1; // количество сдвигаемых блоков

    var carousel5 = document.querySelector('.gallery');
    var list5 = carousel5.querySelector('.gallery__images__list');
    var listElems5 = carousel5.querySelectorAll('.gallery__images__item');
    var btnBack5 = carousel5.querySelector('.btn-back5');
    var btnNext5 = carousel5.querySelector('.btn-next5');
    var position5 = 0; // текущий сдвиг влево

    var slIndex5 = 1;
    showSlide5(slIndex5);

    function plusSlide5() {
        showSlide5(slIndex5 += 1*count5);
    }
    function minusSlide5() {
        showSlide5(slIndex5 -= 1*count5);
    }
    function currentSlide5(t5) {
        showSlide5(slIndex5 = t5);
    }
    function showSlide5(t5) {
      btnBack5.setAttribute("style", "opacity: 1");
      btnNext5.setAttribute("style", "opacity: 1");
      if (t5 <= 1) {
        slIndex5 = 1;
        btnBack5.setAttribute("style", "opacity: 0.5");
      }
      if (t5 >= listElems5.length - countVW5 + 1) {
        slIndex5 = listElems5.length - countVW5 + 1;
        btnNext5.setAttribute("style", "opacity: 0.5");
      }

      var dots5 = document.getElementsByClassName("gallery__images-button");
      for (j = 0; j < dots5.length; j++) {
        dots5[j].className = dots5[j].className.replace("gallery__images-button--active", "");
      }
      var cnt5 = Math.ceil(slIndex5 / 3);
      dots5[cnt5 - 1].className += " gallery__images-button--active";
      position5 = width5 * (slIndex5 - 1);
      list5.style.marginLeft = - position5 + 'px';

      console.log(slIndex5);
      console.log(cnt5);
    }
}