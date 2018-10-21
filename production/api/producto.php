<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$query = "SELECT 
			id_producto,
			producto, 
			descripcion, 
			marca, 
			precio, 
			foto, 
			stock, 
			activo, 
			estado fecha_alta, 
			unidad_de_medida FROM productos AS p
		INNER JOIN unidades_de_medida as um
		ON p.UNIDADES_DE_MEDIDA_id_unidad_medida = um.id_unidad_medida
		WHERE id_producto = ?";

$stmt = $db->prepare($query);

$stmt->execute([$_GET['id']]);

echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));