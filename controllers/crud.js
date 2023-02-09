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
        .otherwise({
            redirectTo: '/pesquisar'
        });
});
