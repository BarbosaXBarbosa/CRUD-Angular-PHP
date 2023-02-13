angular.module('app').controller('inserirCtrl', function ($scope, $location, crudService, $routeParams) {
    var vm = this;

    vm.carregarDados = function() {
        crudService.carregarDados('cargos').then(function(resp) {
            console.log(resp);
            vm.cargos = resp.data;
        });
        crudService.carregarDados('gerentes').then(function(resp) {
            console.log(resp);
            vm.gerentes = resp.data;
        });
        crudService.carregarDados('departamentos').then(function(resp) {
            console.log(resp);
            vm.departamentos = resp.data;
        });
        console.log($routeParams.employee_id);
        if($routeParams.employee_id) {
            vm.id = $routeParams.employee_id;
            console.log(vm.id);
            crudService.pesquisar(vm.id).then(function(resp) {
                    
                vm.registroFuncionario = resp.data[0];
            })
        };
    };
    

    vm.salvarFuncionario = function() {
        //validações da informações.
        if ($scope.form.$invalid) {
            return;
        }else {
            if (vm.id) {
                crudService
                    .editar(vm.registroFuncionario)
                    .then(crudService.mostrarMensagemSucesso())
                    .then(function(){
                        $location.path('/pesquisar')
                    });
            }else {
                crudService
                    .salvar(vm.registroFuncionario)
                    .then(crudService.mostrarMensagemSucesso())
                    .then(function(){
                        $location.path('/pesquisar')
                    });
            }
        }
    };    
    
});
