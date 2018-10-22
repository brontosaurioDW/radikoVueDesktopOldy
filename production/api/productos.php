<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$query = "SELECT 
						id_producto,
						producto,
						marca,
						precio,
						stock,
						activo,
						unidad_de_medida
					FROM productos as p
					INNER JOIN unidades_de_medida as um
					ON p.UNIDADES_DE_MEDIDA_id_unidad_medida = um.id_unidad_medida
					WHERE HUERTAS_id_huerta = '1' AND p.activo = '1'
					ORDER BY p.fecha_alta DESC";

$stmt = $db->prepare($query);

$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));