var add1 = document.querySelector(".dop__service2-btn");
var add2 = document.querySelector(".dop__service3-btn");
var check1 = document.querySelector(".tech");
var check2 = document.querySelector(".photo");

add1.onclick = function(){
	check1.setAttribute("checked","checked");
	this.checked = true;
}
add2.onclick = function(){
	check2.setAttribute("checked","checked");
	this.checked = true;
}