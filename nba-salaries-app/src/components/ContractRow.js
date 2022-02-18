import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function ContractRow({ contract }) {
    return (
        <tr>
            <td>{contract.contract_ID}</td>
            <td>{contract.contract_player_ID}</td>
            <td>{contract.contract_active}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>

        </tr>
    );
}

export default ContractRow;