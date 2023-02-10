angular.module('app').controller('pesquisarCtrl', function ($location, crudService) {
    var vm = this;

    vm.escondeTabela = false;
    vm.chaveBusca = '';
    vm.funcSelecionado = null;
    vm.configTabela = {
        columns: [
            {
                title: 'ID',
                field: 'employee_id',
                sortable: true,
                formatter: function (value, row, index) {
                    if (value > '150') {
                        return '<span class="badge badge-danger" style="background-color: red">' + value + '</span>';
                    } else {
                        return value;
                    }
                }
            },
            {
                title: 'Nome',
                field: 'first_name',
                sortable: true
            },
            {
                title: 'Sobrenome',
                field: 'last_name',
                sortable: true
            },
        ],
        clickToSelect: true,
        showToggle: false,
        toolbar: '#toolbarTabela',
        pagination: true,
        pageSize: 10,
        pageList: [5, 10, 25, 50, 100, 1000],
        
        formatNoMatches: function () {
            return "Nenhum resultado encontrado";
        },
    };

    vm.pesquisar = function () {        
        crudService.pesquisar(vm.chaveBusca).then(function (resp) {
            console.log(resp);
            vm.escondeTabela = true;
            vm.configTabela.data = {}; // Limpando o escopo caso já tenha pesquisado alguma vez.
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
});
