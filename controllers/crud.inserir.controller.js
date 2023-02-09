angular.module('app').controller('inserirCtrl', function ($scope, $location, crudService) {
    var vm = this;

    vm.carregarCargos = function() {
        crudService.listarCargosService().then(function(resp) {
            console.log(resp);
            vm.cargos = resp.data;
        });
    };
    vm.carregarGerentes = function() {
        crudService.listarGerentesService().then(function(resp) {
            console.log(resp);
            vm.gerentes = resp.data;
        });
    };
    vm.carregarDepartamentos = function() {
        crudService.listarDepartamentosService().then(function(resp) {
            console.log(resp);
            vm.departamentos = resp.data;
        });
    };

    vm.salvarFuncionario = function() {
        if ($scope.form.$invalid) {
            return;
        }
        console.log(vm.registroFuncionario);
        crudService
                .salvarService(vm.registroFuncionario)
                .then(mostrarMensagemSucesso)
                .then(vm.novaPesquisa());
    };

    function mostrarMensagemSucesso() {
        empro.ok('Registro gravado com sucesso');
    }

    vm.carregarCargos();
    vm.carregarGerentes();
    vm.carregarDepartamentos();

    vm.novaPesquisa = function(){
        $location.path('/pesquisar')
    }
});
