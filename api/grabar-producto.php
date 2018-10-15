<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$buffer = file_get_contents('php://input');

$postData = json_decode($buffer, true);

// TODO: Validar los datos...

$query = "
	INSERT INTO productos (producto, descripcion, marca, precio, foto, stock, activo, fecha_alta, fecha_baja, CATEGORIAS_id_categoria, UNIDADES_DE_MEDIDA_id_unidad_medida, HUERTAS_id_huerta) 
	VALUES (:producto, :descripcion, :marca, :precio, :foto, :stock, :activo, :fecha_alta, :fecha_baja, :CATEGORIAS_id_categoria, :UNIDADES_DE_MEDIDA_id_unidad_medida, :HUERTAS_id_huerta)";

$stmt = $db->prepare($query);

$exito = $stmt->execute([
	'producto' => $postData['producto'],
	'descripcion' => $postData['descripcion'],
	'marca' => $postData['marca'],
	'precio' => $postData['precio'],
	'foto' => 'tomate.jpg',
	'stock' => $postData['stock'],
	'activo' => $postData['estado'],
	'fecha_alta' => 'NOW()',
	'fecha_baja' => 'DEFAULT',
	'CATEGORIAS_id_categoria' => '2',
	'UNIDADES_DE_MEDIDA_id_unidad_medida' => '5',
	'HUERTAS_id_huerta' => '1'
]);

if($exito) {
	$salida = [
		'status' => 1,
		'data' => [
			'id_producto' 	=> $db->lastInsertId(),
			// 'producto' 		=> $postData['producto'],
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