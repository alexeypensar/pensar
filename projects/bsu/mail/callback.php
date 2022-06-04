<?php

use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

// Файлы phpmailer
require_once 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];


// Формирование самого письма
$title = "Транс-Сервис - обращение с сайта";
$body = "
<h2>Обращение с сайта Транссервис:</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$comment
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    //$mail->SMTPDebug = 2;
//    $mail->Debugoutput = function ($str, $level) {
//        $GLOBALS['status'][] = $str;
//    };

    // Настройки вашей почты
    $mail->Host = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username = 'transservis-tk@mail.ru'; // Логин на почте
    $mail->Password = '27continentstK'; // Пароль на почте
//    $mail->STARTTLS = 25;
    $mail->SMTPSecure = 'SSL';
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 465;
    $mail->setFrom('transservis-tk@mail.ru', 'Транс-Сервис'); // Адрес самой почты и имя отправителя

    // Получатель письма

    $mail->addAddress('info@pensar.ru'); // Ещё один, если нужен


// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);

