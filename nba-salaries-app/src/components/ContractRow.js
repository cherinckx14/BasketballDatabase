import React from 'react';

function ContractRow({ contract }) {
    return (
        <tr>
            <td>{contract.contract_ID}</td>
            <td>{contract.contract_player_ID}</td>
            <td>{contract.contract_active}</td>

        </tr>
    );
}

export default ContractRow;