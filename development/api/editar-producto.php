<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$buffer = file_get_contents('php://input');

$postData = json_decode($buffer, true);

// TODO: Validar los datos...


$query = "UPDATE 
	productos 
SET
	producto = :producto,
	descripcion = :descripcion,
	marca = :marca,
	precio = :precio,
	foto = :foto,
	stock = :stock,
	activo = :activo,
	stock = :stock,
	fecha_alta = NOW(),
	fecha_baja = :fecha_baja,
	CATEGORIAS_id_categoria = :CATEGORIAS_id_categoria,
	UNIDADES_DE_MEDIDA_id_unidad_medida = :UNIDADES_DE_MEDIDA_id_unidad_medida,
	HUERTAS_id_huerta = :HUERTAS_id_huerta
WHERE
	id_producto = :id_producto";

$stmt = $db->prepare($query);

$exito = $stmt->execute([
	'producto' => $postData['producto'],
	'descripcion' => $postData['descripcion'],
	'marca' => $postData['marca'],
	'precio' => $postData['precio'],
	'foto' => 'tomate.jpg',
	'stock' => $postData['stock'],
	'activo' => $postData['activo'],
	//'fecha_alta' => 'NOW()',
	'fecha_baja' => 'DEFAULT',
	'CATEGORIAS_id_categoria' => '2',
	'UNIDADES_DE_MEDIDA_id_unidad_medida' => '5',
	'HUERTAS_id_huerta' => '1',
	'id_producto' => $postData['id_producto']
]);

// print_r($stmt->errorInfo());

if($exito) {
	$salida = [
		'status' => 1,
		'data' => [
			'id_producto' 	=> $db->lastInsertId(),
			'producto' 		=> $postData['producto'],
			// 'id_marca' 		=> $postData['id_marca'],
			// 'id_categoria' 	=> $postData['id_categoria'],
			// 'precio' 		=> $postData['precio'],
			// 'descripcion' 	=> $postData['descripcion'],
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