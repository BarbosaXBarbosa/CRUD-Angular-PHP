<?php
contexto_definir('chave_aplicacao', 'EMPRO_MENU');
?>

<script src="<?= url_controlador_cliente('controllers/crud.service') ?>"></script>
<script src="<?= url_controlador_cliente('controllers/crud.pesquisar.controller') ?>"></script>
<script src="<?= url_controlador_cliente('controllers/crud.inserir.controller') ?>"></script>

<div ng-app="app">
    <div ng-view/>
</div>