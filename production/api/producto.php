<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$query = "SELECT 
	id_producto,
	producto, 
	p.descripcion as descripcion, 
	marca, 
	precio, 
	foto, 
	stock, 
	activo, 
	estado fecha_alta, 
	categoria,
	unidad_de_medida AS unidad,
	CATEGORIAS_id_categoria as id_categoria,
	UNIDADES_DE_MEDIDA_id_unidad_medida as id_unidad
FROM productos AS p
INNER JOIN unidades_de_medida as um
ON p.UNIDADES_DE_MEDIDA_id_unidad_medida = um.id_unidad_medida
INNER JOIN categorias as c
ON p.CATEGORIAS_id_categoria = c.id_categoria
WHERE id_producto = ?";

$stmt = $db->prepare($query);

$stmt->execute([$_GET['id']]);

echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));