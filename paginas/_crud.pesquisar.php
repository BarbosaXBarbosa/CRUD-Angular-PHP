<form name="form" novalidate>
    <div class="row">
        <div class="col-md-6 col-xs-12">
            <h1>PESQUISA EMPREGADO</h1>
            <div class="input-group">  
                <input class="form-control" ng-model="vm.chaveBusca" placeholder="Nome ou Id do Employee"/>
                <span class="input-group-btn">
                    <button empro-botao-buscar 
                            ng-click="vm.pesquisar()" 
                            ng-disabled="!vm.chaveBusca">
                            Pesquisar
                    </button>
                </span>
            </div>              
            
        </div>
    </div>    
</form>
<div class="btn-group" id="toolbarTabela">
    <button type="button"
            class="btn btn-default"
            empro-botao-inserir
            ng-click="vm.inserir()"
            ng-hide="!vm.escondeTabela">
    </button>
    <button ng-disabled="!vm.funcSelecionado"
            empro-botao-editar
            ng-hide="!vm.escondeTabela"
            ng-click="vm.editar()">
    </button>
    <button ng-show="vm.funcSelecionado"
            empro-botao-excluir
            excluir="vm.excluir()">
    </button>
</div>

<div class="row col-md-12">
    <empro-tabela-selecionavel  ng-model="vm.funcSelecionado" 
                                config="vm.configTabela"
                                ng-class="{ 'bs-table-somente-toolbar': !vm.escondeTabela }">
    </empro-tabela-selecionavel>
</div>



