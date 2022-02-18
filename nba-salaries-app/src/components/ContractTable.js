import React from 'react';
import ContractRow from './ContractRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function ContractTable({ contracts }) {
    return (
        
        <>
            <input type="text" placeholder='search for playerid'></input>
            <button>filter</button>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Player ID</th>
                        <th>Active</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map((contract, i) => <ContractRow contract={contract} key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default ContractTable;