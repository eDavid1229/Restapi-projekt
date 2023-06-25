<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$response = [];


$lakes =
[
    [
        "id" =>1,
        "title" => "A tó neve"
    ],
    [
        "id" =>2,
        "title" => "A tó helye"
    ],
    [
        "id" =>3,
        "title" => "A tó fajtája"
    ],
    [
        "id" =>4,
        "title" => "A tó rövid leírása"
    ]
];

$dsn = 'mysql:host=localhost;dbname=fish_tips;charset=utf8mb4';
$pdo = new PDO($dsn, "root", "mysql");

if(isset($_GET["get-lakes"]))
{
    $response = $lakes;
}
else
if(isset($_GET["add-lakes"]))
{
    $sql = "INSERT INTO lakes VALUES (NULL, :name, :location, :comment, :type, NOW(), 1)";
    $query = $pdo->prepare($sql);
    $query->execute([
        "name" => $_POST["name"],
        "location" => $_POST["location"],
        "comment" => $_POST["comment"],
        "type" => $_POST["type"],
    ]);
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);