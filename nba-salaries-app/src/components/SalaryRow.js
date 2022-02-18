import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function SalaryRow({ salary }) {
    return (
        <tr>
            <td>{salary.salary_ID}</td>
            <td>{salary.salary_contract_ID}</td>
            <td>{salary.salary_salary}</td>
            <td>{salary.salary_year}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>
        </tr>
    );
}

export default SalaryRow;