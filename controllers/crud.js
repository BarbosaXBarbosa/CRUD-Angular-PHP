angular.module('app', ['emproDiretivas']);

angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/pesquisar', {
            controller: 'pesquisarCtrl',
            controllerAs: 'vm',
            templateUrl: url_controlador_cliente('_crud.pesquisar')
        })
        .when('/inserir', {
            controller: 'inserirCtrl',
            controllerAs: 'vm',
            templateUrl: url_controlador_cliente('_crud.inserir')
        })
        .when('/editar/:employee_id', {
            controller: 'inserirCtrl',
            controllerAs: 'vm',
            templateUrl: url_controlador_cliente('_crud.inserir'),
            resolve: {
                registro: function ($route, crudService) {
                    return crudService.pesquisar($route.current.params.id);
                }
            }
        })
        .otherwise({
            redirectTo: '/pesquisar'
        });
});
