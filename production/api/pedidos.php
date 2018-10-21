<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$query = "SELECT p.id_pedido, p.subtotal, p.fecha_pedido, u.nombre, u.apellido, tp.tipo_pago 
			FROM pedidos AS p
			INNER JOIN clientes AS c
			ON p.CLIENTES_fk_usuario = c.fk_usuario
			INNER JOIN usuarios AS u 
			ON c.fk_usuario = u.id_usuario
			INNER JOIN tipos_pagos AS tp
			ON p.TIPO_PAGO_id_tipo_pago = tp.id_tipo_pago

			WHERE HUERTAS_id_huerta = '1'";

$stmt = $db->prepare($query);

$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));