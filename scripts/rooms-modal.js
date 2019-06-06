/* Индекс слайда по умолчанию */
    var slideIndex3 = 1;
    showSlides3(slideIndex3);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide3() {
        showSlides3(slideIndex3 += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide3() {
        showSlides3(slideIndex3 -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide3(o) {
        showSlides3(slideIndex3 = o);
    }

    /* Основная функция слайдера */
    function showSlides3(o) {
        var j;
        var slides3 = document.getElementsByClassName("rooms__modal__image");
        var dots3 = document.getElementsByClassName("rooms__modal-button");
        if (o > slides3.length) {
          slideIndex3 = 1;
        }
        if (o < 1) {
            slideIndex3 = slides3.length;
        }
        for (j = 0; j < slides3.length; j++) {
            slides3[j].style.display = "none";
        }
        for (j = 0; j < dots3.length; j++) {
            dots3[j].className = dots3[j].className.replace("active2", "");
        }
        slides3[slideIndex3 - 1].style.display = "block";
        dots3[slideIndex3 - 1].className += " active2";
    };
