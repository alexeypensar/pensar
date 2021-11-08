<?php

use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
//$name = $_POST['name'];
//$phone = $_POST['phone'];
//$comment = $_POST['comment'];



$start = $_POST['quizStartRadioButtons'];

// формируем строку для выдачи в письмо

// для кондиционеров
if($start == "conditioner") {
    $start = "Кондиционер";
    $cond = $_POST['quizConditionerRadioButtons'];
    if ($cond == "home") {
        $cond = "для дома";
    }
    elseif($cond == "business") {
        $cond = "для бизнеса";
    }

    $condArea = $_POST['quizConditioner2Area'];
    $condHeight = $_POST['quizConditioner2Height'];

    $finalText = '
        <b>Оборудование:</b> Кондиционер<br>
        <b>Вид: </b> '.$cond.'<br>
        <b>Площадь помещения: </b> '.$condArea.'<br>
        <b>Высота потолков: </b> '.$condHeight.'
    ';
}

// для холодильных установок
elseif($start == "cold") {
    $start = "Холодильная установка";
    $coldWhatFreeze = $_POST['quizCold1WhatFreeze'];
    $coldArea = $_POST['quizCold2Area'];
    $coldHeight = $_POST['quizCold2Height'];


    $finalText = '
        <b>Оборудование:</b> Холодильная установка<br>
        <b>Что охлаждаем: </b> '.$coldWhatFreeze.'<br>
        <b>Площадь помещения: </b> '.$coldArea.'<br>
        <b>Высота потолков: </b> '.$coldHeight.'
    ';

}

// для отопительного оборудования
elseif($start == "hot") {
    $start = "Отопительное оборудование";
    $hot = $_POST['quizHot'];

    if ($hot == "convector") {
        $hot = "Конвектор";
    }
    elseif ($hot == "gun") {
        $hot = "Тепловая пушка";
    }
    elseif ($hot == "wall") {
        $hot = "Тепловая завеса";
    }
    elseif ($hot == "infra") {
        $hot = "Инфракрасный обогреватель";
    }

    $finalText = '
        <b>Оборудование:</b> Отопительное оборудование<br>
        <b>Тип оборудования: </b> '.$hot.'
    ';

}

$name = $_POST['quizName'];
$phone = $_POST['quizPhone'];
$comment = $_POST['quizComment'];


// Формирование самого письма
$title = "Climate-help - клиент заполнил квиз";
$body = "
<h2>Заполнен квиз:</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Сообщение:</b><br> $comment<br><br>
<b>Информация, заполненная в квизе:</b>
<br>
<p> $finalText</p>

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.timeweb.ru'; // SMTP сервера вашей почты
    $mail->Username = 'info@climate-help.ru'; // Логин на почте
    $mail->Password = 'infinity12889'; // Пароль на почте
//    $mail->STARTTLS = 25;
    $mail->SMTPSecure = 'ssl';
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port =465;
    $mail->setFrom('info@climate-help.ru', 'Ваша климатическая помощь'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('climate_help@b-torg.ru');
    $mail->addAddress('info@pensar.ru'); // Ещё один, если нужен


// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";}
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);