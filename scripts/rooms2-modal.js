/* Индекс слайда по умолчанию */
    var slideIndexx = 1;
    showSlidesx(slideIndexx);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlidex() {
        showSlidesx(slideIndexx += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlidex() {
        showSlidesx(slideIndexx -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlidex(l) {
        showSlidesx(slideIndexx = l);
    }

    /* Основная функция слайдера */
    function showSlidesx(l) {
        var z;
        var slidesx = document.getElementsByClassName("rooms2__modal__image");
        var dotsx = document.getElementsByClassName("rooms2__modal__button");
        if (l > slidesx.length) {
          slideIndexx = 1;
        }
        if (l < 1) {
            slideIndexx = slidesx.length;
        }
        for (z = 0; z < slidesx.length; z++) {
            slidesx[z].style.display = "none";
        }
        for (z = 0; z < dotsx.length; z++) {
            dotsx[z].className = dotsx[z].className.replace("active3", "");
        }
        slidesx[slideIndexx - 1].style.display = "block";
        dotsx[slideIndexx - 1].className += " active3";
    };
