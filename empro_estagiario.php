<?php

require __DIR__ . '/../../lib_externa_backend/php/empro001/controlador_cliente.php';

contexto_definir('chave_conexao', 'EMPRO_ESTAGIARIO');
contexto_definir('chave_sistema', 'EMPRO_MENU');

$controladorCliente = new ControladorCliente();
$controladorCliente->executar();
