var btnOpen = document.querySelector('.click1');
var btn2Open = document.querySelector('.click2');
var btn3Open = document.querySelector('.click3');
var modalSlider = document.querySelector('.rooms__modal');
var modalShadow = document.querySelector('.modal__shadow');

btnOpen.onclick = function(){
	modalSlider.style.display = "block";
	modalShadow.style.display = "block";
}
btn2Open.onclick = function(){
	modalSlider.style.display = "block";
	modalShadow.style.display = "block";
}
btn3Open.onclick = function(){
	modalSlider.style.display = "block";
	modalShadow.style.display = "block";
}
modalShadow.onclick = function(){
	modalSlider.style.display = "none";
	modalShadow.style.display = "none";
}