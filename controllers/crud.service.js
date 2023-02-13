angular.module('app').service('crudService', function ($http) {
    
    this.carregarDados = function($paramentroCarga) {
        switch ($paramentroCarga) {
            case 'cargos':
                return $http.get(url_controlador_cliente('api/crud/carregarCargos'));
            case 'gerentes':
                return $http.get(url_controlador_cliente('api/crud/carregarGerentes'));            
            case 'departamentos':
                return $http.get(url_controlador_cliente('api/crud/carregarDepartamentos'));
        }
    };          
   
    this.pesquisar = function (chavePesquisa) {
        var config = {params:{chavePesquisa: chavePesquisa}};
        return $http.get(url_controlador_cliente('api/crud/pesquisarFuncionario'), config);
    };
    
    this.salvar = function(registroFuncionario) {
        return $http.post(url_controlador_cliente('api/crud/salvarFuncionario'), registroFuncionario);
    };

    this.editar = function(registroFuncionario) {
        return $http.post(url_controlador_cliente('api/crud/editarFuncionario'), registroFuncionario);
    };

    this.excluir = function(idFuncionario) {
        var config = {params:{id: idFuncionario}}
        return $http.delete(url_controlador_cliente('api/crud/excluirFuncionario'), config);
    };

    this.mostrarMensagemSucesso = function() {
        return empro.ok('Registro gravado com sucesso');
    };
});
