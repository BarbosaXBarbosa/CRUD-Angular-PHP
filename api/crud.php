<?php

contexto_definir('chave_aplicacao', 'EMPRO_MENU');
//exigir_usuario_logado();

contexto_definir('sql.trace', true);

function get_pesquisarFuncionario($parametro) {
    //return $parametro;
    $dao = new CrudDAO();

    return $dao->obtemFuncionario($parametro["chavePesquisa"]);
}

function post_salvarFuncionario($parametros) {
    $dao = new CrudDAO();

    return $dao->salvaFuncionario($parametros); 
}

function post_editarFuncionario($parametros) {
    $dao = new CrudDAO();

    return $dao->editaFuncionario($parametros);
}

function post_excluirFuncionario($parametro) {
    $dao = new CrudDAO();

    
    return $dao->excluiFuncionario($parametro["id"]);
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





