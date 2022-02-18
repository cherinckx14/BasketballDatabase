import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function PlayerRow({ player }) {
    return (
        <tr>
            <td>{player.player_ID}</td>
            <td>{player.player_first_name}</td>
            <td>{player.player_last_name}</td>
            <td>{player.player_birth_date}</td>
            <td>{player.player_number}</td>
            <td>{player.player_team_ID}</td>
            <td>{player.player_Positions_ID}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>
        </tr>
    );
}

export default PlayerRow;