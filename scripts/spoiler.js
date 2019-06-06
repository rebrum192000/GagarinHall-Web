
if (screen.width < 1300) {
var spoiler = document.querySelector(".header__menu-btn");
var menu = document.querySelector(".header__nav");


	spoiler.onclick = function() {
		spoiler.style.border = '1px solid #fff';
	if (menu.style.display !== 'block') {
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none';
    }
	}
}
