<?php

use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];


// Формирование самого письма
$title = "Climate-help - обращение с сайта";
$body = "
<h2>Обращение с сайта climate-help.ru:</h2>
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