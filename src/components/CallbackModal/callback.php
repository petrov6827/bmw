<?php
//$getName = false;

//if (!empty($_POST['name'])) {
//    $getName = $_POST['name'];
//}
//
//$toMailData = "имя: ";
//$toMailData .= $_POST['name'];
//$toMailData .= "<br>";
//$toMailData .= "телефон: ";
//$toMailData .= $_POST['phone'];
//$toMailData .= "<br>";
//
//if (mail('petrov6827@gmail.com',
//    $toMailData,
//    'Content-type: text/html; charset=utf-8')
//) {
//    echo 'success';
//} else {
//    echo 'error';
//}

$say = htmlspecialchars($_POST['name']);
$to  = htmlspecialchars($_POST['phone']);

echo  $say, ' ', $to;


?>