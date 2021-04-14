<?php

$webPage = 'contact';
$name = $_POST['user_name'];
$subject = $_POST['user_topic'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];
// $selected = $_POST['selected'];
$token = "1195077988:AAGYUpfLUgHDNIBjWXNH8dYCCc2XSXizq7k"; //НЕ МЕНЯЕТСЯ

$chat_id = ""; //МЕНЯЕТСЯ!!!

$arr = array(
  'Имя: ' => $name,
  'Email' => $email,
  'Subject: ' => $subject,
  'Message' => $text
  // 'Выбранная услуга:' => $selected
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  header('Location: success.php');
} else {
  header('Location: error_form.php');
}
