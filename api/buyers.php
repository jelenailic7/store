<?php
header('Access-Control-Allow-Origin: *');

$buyers = [
  [
    "id" => 1,
    "firstName" => "Jelena",
    "lastName" => "Ilic",
    "email" => "jelena@example.com"
  ],
  [
    "id" => 2,
    "firstName" => "Tamara",
    "lastName" => "Nikolic",
    "email" => "tamara@example.com"
  ],
  [
    "id" => 3,
    "firstName" => "Martina",
    "lastName" => "Ilic",
    "email" => "martina@example.com"
  ]

];

echo json_encode($buyers);

?>

