<?php
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost:3306;dbname=dw6_radiko;charset=utf8', 'root', '');

$query = "SELECT p.id_pedido, p.subtotal, p.fecha_pedido, u.nombre, u.apellido, tp.tipo_pago, ep.estado, e.fecha_envio 
			FROM pedidos AS p
			INNER JOIN clientes AS c
			ON p.CLIENTES_fk_usuario = c.fk_usuario
			INNER JOIN usuarios AS u 
			ON c.fk_usuario = u.id_usuario
			INNER JOIN tipos_pagos AS tp
			ON p.TIPO_PAGO_id_tipo_pago = tp.id_tipo_pago
			INNER JOIN estados_pedidos AS ep
			ON p.ESTADO_PEDIDO_id_estado = ep.id_estado 
			INNER JOIN envios as e
			ON p.ENVIO_id_envio = e.id_envio

			WHERE HUERTAS_id_huerta = '1' AND ep.estado IN ('pendiente de pago','pendiente de entrega')";

$stmt = $db->prepare($query);

$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));