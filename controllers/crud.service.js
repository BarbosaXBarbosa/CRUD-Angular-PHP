angular.module('app').service('crudService', function ($http) {
    

    this.pesquisarService = function (chavePesquisa) {
        return $http.get(url_controlador_cliente('api/crud/pesquisarFuncionario'), {parametroBusca: chavePesquisa});
    };

    this.listarCargosService = function(){
        return $http.get(url_controlador_cliente('api/crud/carregarCargos'));
    };

    this.listarGerentesService = function(){
        return $http.get(url_controlador_cliente('api/crud/carregarGerentes'));
    };
    
    this.listarDepartamentosService = function(){
        return $http.get(url_controlador_cliente('api/crud/carregarDepartamentos'));
    };
    
    this.salvarService = function(registroFuncionario) {
        return $http.post(url_controlador_cliente('api/crud/salvarFuncionario'), registroFuncionario);
    };
});
