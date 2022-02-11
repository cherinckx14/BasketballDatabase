import React from 'react';
import ContractRow from './ContractRow';


function ContractTable({ contracts }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Player ID</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {contracts.map((contract, i) => <ContractRow contract={contract} key={i} />)}
            </tbody>
        </table>
    );
}

export default ContractTable;