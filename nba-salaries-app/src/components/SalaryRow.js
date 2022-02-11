import React from 'react';

function SalaryRow({ salary }) {
    return (
        <tr>
            <td>{salary.salary_ID}</td>
            <td>{salary.salary_contract_ID}</td>
            <td>{salary.salary_salary}</td>
            <td>{salary.salary_year}</td>
        </tr>
    );
}

export default SalaryRow;