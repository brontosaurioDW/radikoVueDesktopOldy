<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$buffer = file_get_contents('php://input');

$postData = json_decode($buffer, true);

//print_r($postData);

$query = "UPDATE 
						productos 
					SET
						activo = '0'
					WHERE
						id_producto = :id_producto";

$stmt = $db->prepare($query);

$exito = $stmt->execute([
	'id_producto' => $postData['id_producto']
]);

// print_r($stmt->errorInfo());

if($exito) {
	$salida = [
		'status' => 1,
		'data' => [
			'producto' 		=> $postData['producto'],
		]
	];
} else {
	$salida = [
		'status' => 0,
		'data' => [
			'error' => 'Error al grabar el registo.'
		]
	];
}

echo json_encode($salida);