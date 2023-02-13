angular.module('app').controller('pesquisarCtrl', function ($location, crudService, configTabela) {
    var vm = this;

    vm.escondeTabela = false;
    vm.chaveBusca = '';
    vm.funcSelecionado = null;
    vm.configTabela = configTabela.configuraTabela();


    vm.pesquisar = function () {        
        crudService.pesquisar(vm.chaveBusca).then(function (resp) {
            console.log(resp);
            vm.escondeTabela = true;
            vm.configTabela.data = {}; // Limpando o escopo caso já tenha pesquisado alguma vez.
            vm.funcSelecionado = null;
            vm.configTabela.data = resp.data;
        });
    };

    vm.inserir = function(){
        $location.path('/inserir');
    };

    vm.editar = function(){
        id = vm.funcSelecionado.employee_id;
        $location.path('/editar/'+ id);
    };

    vm.excluir = function() {
        id = vm.funcSelecionado.employee_id;
        crudService
            .excluir(id)
            .then(crudService.mostrarMensagemSucesso())
            .then(vm.pesquisar(vm.chaveBusca));
    }
});
