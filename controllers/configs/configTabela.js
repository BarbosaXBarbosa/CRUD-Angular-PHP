angular.module('app').service('configTabela', function ($http) {
    this.configuraTabela =function(){
        return  {
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
    } 

});