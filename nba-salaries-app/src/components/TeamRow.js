import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function TeamRow({ team }) {
    return (
        <tr>
            <td>{team.team_ID}</td>
            <td>{team.team_name}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>
        </tr>
    );
}

export default TeamRow;