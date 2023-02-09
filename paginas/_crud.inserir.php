<form name="form" novalidate>
    <h2>Cadastre um novo Empregado</h2>
    <div class="row">


       <empro-grupo-campo class="col-md-6"
                            label="Nome">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.first_name"
                   required/>
       </empro-grupo-campo>
       <empro-grupo-campo class="col-md-6"
                           label="Sobrenome">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.last_name"
                   required/>
        </empro-grupo-campo>


        <empro-grupo-campo class="col-md-8"
                           label="Email">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.email"
                   required/>
        </empro-grupo-campo>
        <empro-grupo-campo class="col-md-4" 
                            label="Telefone">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.phone_number"
                   empro-telefone
                   required/>
        </empro-grupo-campo>


        <empro-grupo-campo class="col-md-3"
                           label="Salário">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.salary " 
                   empro-valor
                   required/>
        </empro-grupo-campo>
        <empro-grupo-campo class="col-md-3"
                           label="Comissão em Porcentagem">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.commission_pct"
                   required/>
        </empro-grupo-campo>
        <empro-grupo-campo class="col-md-3"
                           label="Data de ínicio">
            <input class="form-control" 
                   ng-model="vm.registroFuncionario.hire_date"
                   empro-data
                   required/>
        </empro-grupo-campo>


       <empro-grupo-campo class="col-md-4"
                            label="Cargo">
              <select class="form-control" 
                     required
                     ng-model="vm.registroFuncionario.job_id"
                     ng-options="cargo.job_id as cargo.job_title for cargo in vm.cargos">
              </select>
       </empro-grupo-campo>
       <empro-grupo-campo class="col-md-4"
                            label="Nome do Gerente">
              <select class="form-control"
                     required 
                     ng-model="vm.registroFuncionario.manager_id"
                     ng-options="gerente.employee_id as gerente.first_name + ' ' + gerente.last_name for gerente in vm.gerentes">
              </select>
       </empro-grupo-campo>
        <empro-grupo-campo class="col-md-4"
                           label="Departamento">
              <select class="form-control" 
                     required
                     ng-model="vm.registroFuncionario.department_id"
                     ng-options="departamento.department_id as departamento.department_name for departamento in vm.departamentos">
              </select>
        </empro-grupo-campo>
    </div>
    {{vm.registroFuncionario}}
    <div class="row container-botoes">
        <div class="col-xs-12 botoes">
            <button empro-botao-salvar ng-click="vm.salvarRegistroFuncionario()"></button>
            
            <button empro-botao-nova-busca ng-click="vm.novaPesquisa()" type="button"></button>
        </div>
    </div>
</form>

