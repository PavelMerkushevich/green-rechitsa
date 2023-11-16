<?php
// Проверяем, что запрос был отправлен методом POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Получаем данные из массива $_POST
  $data = $_POST;
  // Преобразуем данные в JSON-формат
  // $json = json_decode($data['geojson']);
  file_put_contents('quartals.geojson', $data['geojson']);
  // Выводим сообщение об успешной записи
  var_dump($data['geojson']);
}
?>