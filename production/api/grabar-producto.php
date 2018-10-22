<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$buffer = file_get_contents('php://input');

$postData = json_decode($buffer, true);

//print_r($postData);

$query = "INSERT INTO
						productos 
					SET
						producto = :producto,
						descripcion = :descripcion,
						marca = :marca,
						precio = :precio,
						foto = NULL,
						stock = :stock,
						activo = '1',
						estado = '1',
						fecha_alta = NOW(),
						fecha_baja = NULL,
						CATEGORIAS_id_categoria = :categoria,
						UNIDADES_DE_MEDIDA_id_unidad_medida = :unidad,
						HUERTAS_id_huerta = '1'";

$stmt = $db->prepare($query);

$exito = $stmt->execute([
	'producto' => $postData['producto'],
	'descripcion' => $postData['descripcion'],
	'marca' => $postData['marca'],
	'precio' => $postData['precio'],
	'stock' => $postData['stock'],
	'categoria' => $postData['categoria'],
	'unidad' => $postData['unidad']
]);

// print_r($stmt->errorInfo());

if($exito) {
	$salida = [
		'status' => 1,
		'data' => [
		'id_producto' => $db->lastInsertId(),
		'producto' => $postData['producto']
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