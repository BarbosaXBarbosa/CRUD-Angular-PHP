<?php

class CrudDAO {

    
    public function buscarPorId($busca) {
        $sql = "";
        
        return query($sql, [$busca], QUERY_PRIMEIRO);
    }


    public function obtemFuncionario($busca) {
        if (is_numeric($busca)) {
            $sql = "SELECT e.employee_id, e.first_name, e.last_name
                    FROM employees e
                    WHERE employee_id = ?";
            return query($sql, [$busca]);
        }
        else {
            $sql = "SELECT e.employee_id, e.first_name, e.last_name
                    FROM employees e
                    WHERE (upper(first_name) LIKE ?
                        OR upper(last_name) LIKE ?)
                    ORDER BY(first_name)"; 

            return query($sql, ['%'.mb_strtoupper($busca) . '%', '%'.mb_strtoupper($busca) . '%']);
        }  
    }

    public function salvarFuncionario($registro){
        
        $sql = "INSERT INTO employees
                (
                    employee_id, first_name, last_name, email, 
                    phone_number, hire_date, job_id, salary, 
                    commission_pct, manager_id, department_id
                )
                VALUES
                (
                    employees_seq.nextval, :first_name, :last_name, 
                    :email, :phone_number, :hire_date, :job_id, :salary, 
                    :commission_pct, :manager_id, :department_id
                )";
        return query($sql, $registro);
    }

    public function carregarCargos() {
        $sql = "SELECT j.job_id, j.job_title
                FROM jobs j";
        return query($sql);
    }   

    public function carregarGerentes() {
        $sql = "SELECT DISTINCT ger.employee_id, ger.first_name, ger.last_name
                FROM employees func 
                INNER JOIN employees ger
                    ON func.manager_id = ger.employee_id
                ORDER BY (first_name)";
        return query($sql);
    } 

    public function carregarDepartamentos() {
        $sql = "SELECT department_id, department_name
                FROM departments";
        return query($sql);
    } 
}
