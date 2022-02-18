import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function PlayerPositionRow({ playerposition }) {
    return (
        <tr>
            <td>{playerposition.playerposition_playerID}</td>
            <td>{playerposition.playerposition_pg}</td>
            <td>{playerposition.playerposition_sg}</td>
            <td>{playerposition.playerposition_sf}</td>
            <td>{playerposition.playerposition_pf}</td>
            <td>{playerposition.playerposition_c}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>
        </tr>
    );
}

export default PlayerPositionRow;