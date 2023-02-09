<?php

contexto_definir('chave_aplicacao', 'EMPRO_MENU');
//exigir_usuario_logado();

contexto_definir('sql.trace', true);

function get_pesquisarFuncionario($parametros) {
    $dao = new CrudDAO();

    return $dao->obtemFuncionario($parametros["parametroBusca"]);
}

function post_salvarFuncionario($parametros) {
    $dao = new CrudDAO();

    return $dao->salvaFuncionario($parametros); 
}

function get_carregarCargos() {
    $dao = new CrudDAO();

    return $dao->carregarCargos(); 
}

function get_carregarGerentes() {
    $dao = new CrudDAO();

    return $dao->carregarGerentes(); 
}

function get_carregarDepartamentos() {
    $dao = new CrudDAO();

    return $dao->carregarDepartamentos(); 
}



