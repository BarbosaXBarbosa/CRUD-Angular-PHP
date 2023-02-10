angular.module('app').controller('inserirCtrl', function ($scope, $location, crudService) {
    var vm = this;

    vm.registroFuncionario=[];

    vm.carregarDados = function() {
        crudService.carregarDados('cargos',).then(function(resp) {
            console.log(resp);
            vm.cargos = resp.data;
        });
        crudService.carregarDados('gerentes',).then(function(resp) {
            console.log(resp);
            vm.gerentes = resp.data;
        });
        crudService.carregarDados('departamentos',).then(function(resp) {
            console.log(resp);
            vm.departamentos = resp.data;
        });
        if (vm.rotaEdicao()) {
            id = $location.$$path.slice(8,($location.$$path.length));
            crudService.pesquisar(id).then(function(resp) {
                vm.registroFuncionario = resp.data[0];
            });
        }
        
    };

    vm.salvarFuncionario = function() {
        //validações da informações.
        if ($scope.form.$invalid) {
            return;
        }else {
            if (vm.rotaEdicao()) {
                crudService
                    .editar(vm.registroFuncionario)
                    .then(mostrarMensagemSucesso)
                    .then(vm.novaPesquisa());
            }else {
                crudService
                    .salvar(vm.registroFuncionario)
                    .then(mostrarMensagemSucesso)
                    .then(vm.novaPesquisa());
            }
        }
    };

    function mostrarMensagemSucesso() {
        empro.ok('Registro gravado com sucesso');
    };
    
    vm.novaPesquisa = function(){
        $location.path('/pesquisar')
    };

    vm.rotaEdicao = function(){
        if ($location.$$path == "/inserir"){
            return false;
        }else {
            return true;
        }
    };
});
