import React from 'react';
import SalaryRow from './SalaryRow';


function SalaryTable({ salaries }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Contract ID</th>
                    <th>Salary</th>
                    <th>Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {salaries.map((salary, i) => <SalaryRow salary={salary} key={i} />)}
            </tbody>
        </table>
    );
}

export default SalaryTable;