<?php
$Gagarin = $_POST['Gagarin'];
$BC = $_POST['BC'];
$D = $_POST['D'];
$Studio = $_POST['Studio'];
$Area = $_POST['Area'];
$teh = $_POST['teh'];
$photo = $_POST['photo'];
$tel = $_POST['tel'];
$email = $_POST['email'];


mail("rebrum1920@mail.ru", "Новая заявка с сайта", "Gagarin Hall - ".$Gagarin."\r\nЛомоносов BC - ".$BC."\r\nЛомоносов D - ".$D."\r\nПавлов Studio - ".$Studio."\r\nЭйнштейн Area - ".$Area."\r\n\r\nТехническое сопровождение - ".$teh."\r\nФото- и видео- съемка - ".$photo."\r\n\r\nТелефон посетителя - ".$tel."\r\nE-mail посетителя - ".$email."\r\n\r\nFrom: webmaster@gagarin.m-c-m-c.ru \r\n")
?>

<script>
	function changeurl(){eval(self.location="http://gagarin.m-c-m-c.ru/");}
window.setTimeout("changeurl();",1000);
</script>